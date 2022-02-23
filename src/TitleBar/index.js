import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import {VscChromeClose, VscChromeMaximize, VscChromeMinimize, VscChromeRestore} from 'react-icons/vsc'
import './style.css';

export default function TitleBar(){
    const [isMaximized, setMaximized] = useState(true);

    function toggleMaximized(){
        setMaximized(!isMaximized);
        window.electronAPI.toggleMaximizeApp(!isMaximized);
    }

    return(
        <>
            <Flex userSelect='none' h='35px' color='white' backgroundColor='blackAlpha.900' w='100%'>
                <Flex justify='center' align='center' boxSize='35px'>
                    <Image boxSize='25px' borderRadius='50%' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png'/>
                </Flex>
                <Text position='absolute' left='50%' transform='translate(-50%, 0)' alignSelf='center'>JS Engine</Text>
                <Flex position='absolute' right='0'>
                    <Flex justifyContent='center' align='center'  _hover={{backgroundColor:'whiteAlpha.300' }} w='45px' h='35px' borderRadius='none'  onClick={window.electronAPI.minimizeApp}><VscChromeMinimize color='white'/></Flex>
                    <Flex justifyContent='center' align='center'  _hover={{backgroundColor:'whiteAlpha.300' }} w='45px' h='35px' borderRadius='none' onClick={toggleMaximized}>{(!isMaximized)? <VscChromeMaximize/> : <VscChromeRestore/>}</Flex>
                    <Flex justifyContent='center' align='center'  _hover={{backgroundColor:'red' }} w='45px' h='35px' borderRadius='none'  onClick={window.electronAPI.closeApp} id='test'><VscChromeClose/></Flex>
                </Flex>
            </Flex>
            
            
        </>
    )
}