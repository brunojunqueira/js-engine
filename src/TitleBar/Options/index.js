import { Flex } from "@chakra-ui/react";

export default function Options({...props}){
    return(
        <Flex color='white' position='absolute' top='0' left='45px' fontSize='14px' align='center' {...props}>
            <Flex justify='center' align='center' _hover={{backgroundColor:'whiteAlpha.200' }} w='100%' h='35px' pl='10px' pr='10px' borderRadius='none'>Arquivo</Flex>
            <Flex justify='center' align='center' _hover={{backgroundColor:'whiteAlpha.200' }} w='100%' h='35px' pl='10px' pr='10px' borderRadius='none'>Editar</Flex>
            <Flex justify='center' align='center' _hover={{backgroundColor:'whiteAlpha.200' }} w='100%' h='35px' pl='10px' pr='10px' borderRadius='none'>Ver</Flex>
        </Flex>
    )
}