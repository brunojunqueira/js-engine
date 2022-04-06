import { Box, Flex } from '@chakra-ui/react';

export function MenuCenter1() {
    return (
        <Box 
            id='SceneBox'
            h="100%"
            w="100%"
        >
            <Box as={Flex} justifyContent='left' alignItems='center' pl="10px" w="100%" h="26px" bg="#191919">
                <span>Scene</span>
            </Box>
        </Box>
    );
}