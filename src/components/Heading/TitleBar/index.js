import { Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import {VscChromeClose, VscChromeMaximize, VscChromeMinimize, VscChromeRestore} from 'react-icons/vsc'
import {FaCog} from 'react-icons/fa'
import Options from "./Options";
import './style.scss';
import { useEngineContext } from "../../../hooks/useEngineContext";

export default function TitleBar(){
    const [isMaximized, setMaximized] = useState(true);
    const { Project } = useEngineContext();

    function toggleMaximized(){
        setMaximized(!isMaximized);
        window.eAPI.toggleMaximizeApp(!isMaximized);
    }

    return(
        <Flex position='sticky' top='0' userSelect='none' h='35px' color='white' backgroundColor='black' width='100%'>
            <Flex t='0' className="draggable" h='35px' color='white' width='100%'>
                <Text fontSize='12px' position='absolute' left='50%' transform='translate(-50%, 0)' alignSelf='center'>{Project && Project?.name + ' - '}Engine.js</Text>
            </Flex>
            <Flex className="nodraggable" position='absolute' left='0' justify='center' align='left'>
                <Icon fontSize='14px' color='orange.200' mt='11px' ml='15px' as={FaCog}/>
                <Options className="nodraggable"/>
            </Flex>
            <Flex className="nodraggable" color='white' position='absolute' top='0' right='0'>
                <Flex justify='center' align='center' _hover={{backgroundColor:'whiteAlpha.200' }} w='45px' h='35px' borderRadius='none'  onClick={window.eAPI.minimizeApp}><VscChromeMinimize/></Flex>
                <Flex justify='center' align='center' _hover={{backgroundColor:'whiteAlpha.200' }} w='45px' h='35px' borderRadius='none' onClick={toggleMaximized}>{(!isMaximized)? <VscChromeMaximize/> : <VscChromeRestore/>}</Flex>
                <Flex justify='center' align='center' _hover={{backgroundColor:'red' }} w='45px' h='35px' borderRadius='none'  onClick={window.eAPI.closeApp} id='test'><VscChromeClose/></Flex>
            </Flex>
        </Flex>
    )
}