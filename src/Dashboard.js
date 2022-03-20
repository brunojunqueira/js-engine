import { useState } from 'react';
import { useSizeContext } from './hooks/useSizeContext';
import { useEngineContext } from './hooks/useEngineContext';

import { Button, Flex, Text } from '@chakra-ui/react';
import {BsFillInboxFill} from 'react-icons/bs'

import App from './components/App';
import NewProject from './components/NewProject';

import './Dashboard.scss';

function Dashboard(){
  const [newProjectActive, setNewProjectActive] = useState(false);
  const { smallWindow } = useSizeContext();
  const { Project, OpenProject } = useEngineContext();
 
  return(
    <>
      {(Project) ?
        <div className={`app-container ${smallWindow && 'small-mode'}`}>
          <App/>
        </div>
        :
        <Flex className='project-area' color='gray' >
          <BsFillInboxFill color='black' opacity='0.4' fontSize='200px'/>
          <Text>Wow, pal. Seems that have nothing here yet. </Text>
          <Flex className='options-area'>
            <Flex className='option'>
              <Button onClick={() => setNewProjectActive(prev => !prev)} _focus={{outlineStyle:'none'}} size='sm'>New Project</Button>
              <Button _focus={{outlineStyle:'none'}} size='sm' onClick={OpenProject}>Open Project</Button>
            </Flex>
          </Flex>
          {newProjectActive && <NewProject/>}
        </Flex>
      }
    </>
  );
}

export default Dashboard;