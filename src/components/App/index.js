import { Box, Flex } from '@chakra-ui/react';

import { MenuLeft1 } from './menus/MenuLeft1';
import { MenuLeft2 } from './menus/MenuLeft2';
import { MenuCenter1 } from './menus/MenuCenter1';
import { MenuCenter2 } from './menus/MenuCenter2';
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
      className="app-container"
    >
      <Flex flexDir={smallWindow ? 'column' : 'row'} h="100%" w="100%">
        <Box h={smallWindow ? "30%" : "100%"} order={smallWindow && 1} w={smallWindow ? "100%" : "20%"}>
          <MenuLeft1 />
          <MenuLeft2 />
        </Box>
        <Box h={smallWindow ? "50%" : "100%"} order={smallWindow && 0} w={smallWindow ? "100%" : "60%"} borderX="2px" borderColor="#191919">
          <MenuCenter1 />
          <MenuCenter2 />
        </Box>
        <Box h={smallWindow ? "20%" : "100%"} order={smallWindow && 2} w={smallWindow ? "100%" : "20%"} bg="#282828">
          <MenuRight />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
