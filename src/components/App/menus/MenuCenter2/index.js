import { Box } from '@chakra-ui/react';

export function MenuCenter2() {
    return (
        <Box 
            h="40%"
            bg="#282828"
        >
            <Box w="100%" h="26px" pl="10px" bg="#191919">
                {'Asset > Imagens'}
            </Box>
            <Box w="100%" h="100%" pl="20px" pt="10px" display="flex" justifyContent="center" alignItems="center">
                <p>Qualquer coisa de asset.</p>
            </Box>
        </Box>
    );
}