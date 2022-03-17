import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react'
import { SizeState } from './contexts/SizeState';
import { EngineProvider } from './contexts/Engine';

import TitleBar from './components/Heading/TitleBar';
import Dashboard from './Dashboard';

import './index.scss';


ReactDOM.render(
  <ChakraProvider id="test">
    <SizeState>
      <EngineProvider>
        <TitleBar/>
        <Dashboard />
      </EngineProvider>
    </SizeState>
  </ChakraProvider>,
  document.getElementById('root')
);
