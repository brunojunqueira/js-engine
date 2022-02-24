import { Box } from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <div className="App">
      <Box display="flex" h="100%" w="100%">
        <Box h="100%" bg="#383838" w="20%">
          <Box w="100%" bg="#282828">
            <Box
              as='button'
              height='24px'
              lineHeight='1.2'
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              border='none'
              borderRadius='2px'
              px='8px'
              fontSize='14px'
              fontWeight='semibold'
              color='#c0c0c0'
              outlineStyle="none"
              _active={{
                outlineStyle: 'none',
                bg: '#383838',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
              }}
              _focus={{
                bg: '#383838',
              }}
            >
              Hierarchy
            </Box>
          </Box>
        </Box>
        <Box h="100%" w="60%">
          <Box h="75%"></Box>
          <Box h="25%" bg="#383838"></Box>
        </Box>
        <Box h="100%" bg="#383838" w="20%">
        </Box>
      </Box>
    </div>
  );
}

export default App;
