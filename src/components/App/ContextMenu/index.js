import { Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ContextMenu({target}){

    useEffect(() => {
        document.onclick = () => { 
            setShow(false)
        };
        document.oncontextmenu = (e) =>{
            if(e.target === target){
                e.preventDefault();
                setAnchorPoint({x: e.pageX, y: e.pageY})
                setShow((prevState) => !prevState);
            }
            
        };
    }, [])

    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    return (
        (show) && 
        <Menu defaultIsOpen>
            <MenuButton position='absolute' left={anchorPoint.x} top={anchorPoint.y} as={Flex}></MenuButton>
            <MenuList w='240px'>
            </MenuList>
        </Menu>
    )
}