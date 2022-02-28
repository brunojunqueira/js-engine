import { Box } from '@chakra-ui/react';

import { MenuLeft1 } from './components/App/menus/MenuLeft1';
import { MenuLeft2 } from './components/App/menus/MenuLeft2';
import { MenuCenter1 } from './components/App/menus/MenuCenter1';
import { MenuCenter2 } from './components/App/menus/MenuCenter2';
import { MenuRight } from './components/App/menus/MenuRight';

import { useSizeContext } from './hooks/useSizeContext';

import './App.css';

function App() {
  const { smallWindow } = useSizeContext();

  return (
    <div className={`app-container ${smallWindow && 'small-mode'}`}>
      <Box display="flex" flexDir={smallWindow ? 'column' : 'row'} h="100%" w="100%">
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
      </Box>
    </div>
  );
}

export default App;
