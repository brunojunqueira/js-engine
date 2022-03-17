import { useSizeContext } from './hooks/useSizeContext';
import { useEngineContext } from './hooks/useEngineContext';

import { Flex, Link, Text } from '@chakra-ui/react';
import App from './components/App';

import './Dashboard.scss';

function Dashboard(){
  const { smallWindow } = useSizeContext();
  const { Project } = useEngineContext();
  return(
    <div className={`app-container ${smallWindow && 'small-mode'}`}>
      {(Project) ?
        <App/>
        :
        <Flex className='project-area'>
          <Text>Wow, pall. Seems that have nothing here yet. </Text>
          <Flex className='options-area'>
            <Flex className='option'>
              <Link>New Project</Link>
              <Text>Create a New Project</Text>
            </Flex>
          </Flex>
        </Flex> 
      }
    </div>
  );
}

export default Dashboard;