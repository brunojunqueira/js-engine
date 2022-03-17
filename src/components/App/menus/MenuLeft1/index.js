import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

import { TabButton } from '../../TabButton';

import './style.css';
import ContextMenu from '../../ContextMenu';

export function MenuLeft1() {
    const [currentTab, setCurrentTab] = useState('hierarchy');
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    const gameObject = {name:'GameObject', func:()=>{}}

    const novo = {name:'New', subItens: true, menu:[gameObject]};

    const options = [novo];

    function toggleContext(e){
        setAnchorPoint({ x: e.pageX, y: e.pageY });
        setShow((prevState) => !prevState);
    }

    return (
        <Box onContextMenu={toggleContext} h="60%" bg="#282828" borderBottom="2px" borderColor="#191919">
            {(show) && <ContextMenu options={options} cord={anchorPoint}/>}
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