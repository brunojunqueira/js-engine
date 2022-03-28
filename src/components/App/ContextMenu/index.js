import { Flex, Menu, MenuButton, MenuList } from "@chakra-ui/react";

export default function ContextMenu({cord, options}){
    return(
        <Menu defaultIsOpen>
            <MenuButton position='absolute' left={cord.x} top={cord.y} as={Flex}></MenuButton>
            <MenuList w='240px'>
            </MenuList>
        </Menu>
    )
}