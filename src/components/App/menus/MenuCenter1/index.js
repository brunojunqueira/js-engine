import { Box } from '@chakra-ui/react';
import { useEngineContext } from '../../../../hooks/useEngineContext';

export function MenuCenter1() {

    const { Project, Time } = useEngineContext();

    return (
        <Box 
            id='SceneBox'
            h="60%"
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            
        </Box>
    );
}