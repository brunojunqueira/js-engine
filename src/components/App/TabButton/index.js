import { Box } from "@chakra-ui/react";

export function TabButton({ label, ...props }) {
    return (
        <Box
            as='button'
            height='25px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='none'
            borderRadius='2px'
            px='15px'
            fontSize='14px'
            fontWeight='semibold'
            color='#c0c0c0'
            _active={{
                bg: '#383838',
                transform: 'scale(1)',
                borderColor: '#bec3c9',
            }}
            {...props}
        >
            { label }
        </Box>
    );
}