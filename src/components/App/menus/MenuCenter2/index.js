import './style.scss';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import {ChevronRightIcon} from '@chakra-ui/icons'
import { useEngineContext } from '../../../../hooks/useEngineContext'
import { useEffect, useState } from 'react';
import { chooseIconByExtension } from '../../../utils';

export function MenuCenter2() {
    const { Project } = useEngineContext();

    useEffect(()=>{
        setHome();
        document.addEventListener('click', checkTarget);

        return () => {
            document.removeEventListener('click', checkTarget);
        }
        // eslint-disable-next-line
    }, [])

    const [dirContent, setDirContent] = useState([]);
    const [directories, setDirectories] = useState([]);
    const [dirIndex, setDirIndex] = useState(null);

    async function openDirectory(path){
       let content = await window.eAPI.getDirContent(path);

       content.sort((itemA, itemB) => {
           itemA = itemA.name.split('.').length;
           itemB = itemB.name.split('.').length;
           
           if(itemA < itemB){
               return -1;
           }
           
           if(itemA > itemB){
               return 1;
           }

           return 0;
       });
       setDirContent(content);
    }

    function setHome(){
        let dir = Project.path.split('\\');
        setDirectories([{name: dir[dir.length-1], path: Project.path}]);
        openDirectory(Project.path)
    }

    async function open(path, name){
        let ext = name.split('.');
        if(ext.length === 1){
            openDirectory(path);
            setDirectories(prevState => [...prevState, { name: name, path: path }]);
        }
        else{
            await window.eAPI.executeOnPrompt(`code "${path}"`);
        }
    }

    function checkAndDelete(path, index) {
        const currentDir = directories.filter((dir, dirIndex) => !(dirIndex > index));
        setDirectories(currentDir);
        openDirectory(path);
    }

    function checkTarget(e) {
        const gridBack = document.getElementById('gridBack');

        if(e.target === gridBack){
            setDirIndex(null);
        }
    }

    console.log('dirContent', dirContent);

    return (
        <Box 
            h="40%"
            bg="#282828"
        >
            <Box as={Flex} justifyContent='left' alignItems='center' w="100%" h="26px" pl="10px" bg="#191919">
                <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
                    {directories.map((item, index) => {
                        return(
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink onClick={() => {checkAndDelete(item.path, index)}}>
                                {item.name}
                            </BreadcrumbLink>
                        </BreadcrumbItem>)
                    })}
                </Breadcrumb>
            </Box>
            <Grid id='gridBack' w="100%" h="100%" pl="20px" pt="10px" templateColumns='repeat(8, 1fr)'>
                {dirContent.map((item, index) => {
                    let path = chooseIconByExtension(item.name);
                    let isSelected = dirIndex === index ? 'gray.600' : 'none';
                    return(
                        <GridItem background={isSelected} onDoubleClick={() => open(`${Project.path}\\${item.name}`, item.name)} onClick={() => setDirIndex(index)} key={index} as={Flex} w='100px' h='100px' flexDir='column' justifyContent='center' alignItems='center'>
                            <Image userSelect='none' draggable='false' w='75px' h='75px' src={path}/>
                            <Text userSelect='none' wordBreak='break-word'>{item.name}</Text>
                        </GridItem>
                    )
                })}
            </Grid>
        </Box>
    );
}