import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react'

import TitleBar from './TitleBar';
import App from './App';

import './index.css';

ReactDOM.render(
  <ChakraProvider id="test">
    <TitleBar/>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
