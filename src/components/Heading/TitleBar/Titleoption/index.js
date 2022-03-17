import { Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"

export default function TitleOption({option}){

    return(
        <Menu gutter={0}>
            <MenuButton as={Flex} justify='center' align='center' _hover={{backgroundColor:'whiteAlpha.200'}} w='100%' h='35px' pl='10px' pr='10px'>{option.name}</MenuButton>
            <MenuList as={Flex} gap='5px' flexDirection='column' backgroundColor='#424242' border='none' borderRadius='none'>
                {option.menu.map((x, key) => {
                    return(
                        <MenuItem key={key} onClick={x.func} as={Flex} cursor='pointer' h='25px' _focus={{backgroundColor:'#424242' }} _hover={{backgroundColor:'gray' }}>
                            <Text>{x.name}</Text>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Menu>
    )
    
}