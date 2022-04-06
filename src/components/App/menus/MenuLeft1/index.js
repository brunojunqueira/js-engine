import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

import { TabButton } from '../../TabButton';

import './style.css';
import ContextMenu from '../../ContextMenu';

export function MenuLeft1() {

    const [currentTab, setCurrentTab] = useState('hierarchy');
    const [target, setTarget] = useState();

    return (
        <Box onContextMenu={(e) => setTarget(e.target)} h="100%" bg="#282828" borderBottom="2px" borderColor="#191919">
            <ContextMenu target={target}/>
            <Box w="100%" bg="#191919">
                <TabButton
                    style={{ background: currentTab === 'hierarchy' && '#383838' }}
                    onClick={() => setCurrentTab('hierarchy')}
                    label="Hierarchy"
                />
            </Box>
            <Box w="100%" pl="20px" pt="10px">
                <span>Qualquer coisa de hierarquia.</span>
            </Box>
        </Box>
    );
}