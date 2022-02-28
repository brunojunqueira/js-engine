import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react'

import TitleBar from './components/Index/TitleBar';
import App from './App';
import { SizeState } from './contexts/SizeState';

import './index.scss';

ReactDOM.render(
  <ChakraProvider id="test">
    <SizeState>
      <TitleBar/>
      <App />
    </SizeState>
  </ChakraProvider>,
  document.getElementById('root')
);
