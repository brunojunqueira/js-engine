import { Box, Flex } from '@chakra-ui/react';

import { MenuLeft1 } from './menus/MenuLeft1';
import { MenuLeft2 } from './menus/MenuLeft2';
import { MenuCenter1 } from './menus/MenuCenter1';
import { MenuRight } from './menus/MenuRight';

import { useSizeContext } from '../../hooks/useSizeContext';

import './app.scss';

function App() {
  const { smallWindow } = useSizeContext();

  return (
    <Flex 
      w="100vw"
      h={(!smallWindow) ? "calc(100vh - 35px)" : "calc(200vh - 35px)"}
      color="white"
    >
      <Flex 
        flexDir={smallWindow ? 'column' : 'row'} 
        h={smallWindow ? "500px" : "100%"} 
        w="100%" 
        className={smallWindow && "app-container"}
      >
        <Flex flexDir='column' gap='0.5px' h="100%" w="80%">
          <Box as={Flex} flexDir='row' h="60%" w="100%">
            <Box w="25%">
              <MenuLeft1 />
            </Box>
            <Box w="75%">
              <MenuCenter1 />
            </Box>       
          </Box>
          <Box h="40%" w={smallWindow ? "100%" : "100%"} borderX="2px" borderColor="#191919">
            <MenuLeft2 />
          </Box>
        </Flex>
        <Box h={smallWindow ? "5000px" : "100%"} order={smallWindow && 2} w={smallWindow ? "100%" : "20%"} bg="#282828">
          <MenuRight />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
