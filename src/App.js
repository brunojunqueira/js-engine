import { Button, Flex } from '@chakra-ui/react';
import './App.scss';
import { CreateProject } from './bin/JSEngine';

function App() {
  return (
    <Flex className="App">
      <Button onClick={CreateProject}>New Project</Button>
    </Flex>
  );
}

export default App;
