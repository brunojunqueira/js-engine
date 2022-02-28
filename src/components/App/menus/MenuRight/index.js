import { useCallback, useState } from "react";

import { Box } from "@chakra-ui/react";

import { TabButton } from "../../TabButton";
import { InspectorTab } from "./InspectorTab";
import { ServicesTab } from "./ServicesTab";

export function MenuRight() {
    const [currentTab, setCurrentTab] = useState('inspector');

    const renderComponent = useCallback(() => {
        switch (currentTab) {
            case 'inspector':
                return <InspectorTab />;
            case 'services':
                return <ServicesTab />;
            default:
                return <p>Qualquer coisa aqui</p>;
        }
    }, [currentTab]);

    return (
        <>
            <Box w="100%" bg="#191919">
                <TabButton
                    style={{ background: currentTab === 'inspector' && '#383838' }}
                    onClick={() => setCurrentTab('inspector')}
                    label="Inspector"
                />
                <TabButton
                    style={{ background: currentTab === 'services' && '#383838' }}
                    onClick={() => setCurrentTab('services')}
                    label="Services"
                />
            </Box>
            <Box w="100%" pl="20px" pt="10px">
                {renderComponent()}
            </Box>
        </>
    )
}