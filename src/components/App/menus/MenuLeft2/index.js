import { useState, useCallback } from 'react';
import { Box } from '@chakra-ui/react';

import { TabButton } from '../../TabButton';
import { ProjectTab } from './ProjectTab';
import { ConsoleTab } from './ConsoleTab';
import { AnimationTab } from './AnimationTab';
import { AnimatorTab } from './AnimatorTab';

import './style.css';

export function MenuLeft2() {
    const [currentTab, setCurrentTab] = useState('project');

    const renderComponent = useCallback(() => {
        switch (currentTab) {
            case 'project':
                return <ProjectTab />;
            case 'console':
                return <ConsoleTab />;
            case 'animation':
                return <AnimationTab />;
            case 'animator':
                return <AnimatorTab />;
            default:
                return <p>Qualquer coisa aqui</p>;
        }
    }, [currentTab]);

    return (
        <Box h="40%" bg="#282828">
            <Box w="100%" bg="#191919">
                <TabButton
                    style={{ background: currentTab === 'project' && '#383838' }}
                    onClick={() => setCurrentTab('project')}
                    label="Project"
                />
                <TabButton
                    style={{ background: currentTab === 'console' && '#383838' }}
                    onClick={() => setCurrentTab('console')}
                    label="Console"
                />
                <TabButton
                    style={{ background: currentTab === 'animation' && '#383838' }}
                    onClick={() => setCurrentTab('animation')}
                    label="Animation"
                />
                <TabButton
                    style={{ background: currentTab === 'animator' && '#383838' }}
                    onClick={() => setCurrentTab('animator')}
                    label="Animator"
                />
            </Box>
            <Box w="100%" pl="20px" pt="10px">
                {renderComponent()}
            </Box>
        </Box>
    );
}