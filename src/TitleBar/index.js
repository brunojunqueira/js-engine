import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import {VscChromeClose, VscChromeMaximize, VscChromeMinimize, VscChromeRestore} from 'react-icons/vsc'
import Options from "./Options";
import './style.scss';

export default function TitleBar(){
    const [isMaximized, setMaximized] = useState(true);

    function toggleMaximized(){
        setMaximized(!isMaximized);
        window.eAPI.toggleMaximizeApp(!isMaximized);
    }

    return(
        <Flex userSelect='none' h='35px' color='white' backgroundColor='blackAlpha.600' width='100%'>
            <Flex className="draggable" h='35px' color='white' width='100%'>
                <Text position='absolute' left='50%' transform='translate(-50%, 0)' alignSelf='center'>JS Engine</Text>
            </Flex>
            <Flex className="nodraggable" position='absolute' left='0' justify='center' align='left'>
                <Image boxSize='20px' marginTop='8px' marginLeft='8px' borderRadius='50%' href="https://ibb.co/DKz8HHr" src='https://i.ibb.co/QmpC33D/js-icon.png' alt="js-icon"/>
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