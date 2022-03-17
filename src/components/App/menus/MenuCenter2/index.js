import './style.scss';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';
import {ChevronRightIcon} from '@chakra-ui/icons'

export function MenuCenter2() {

    function setDirectory(path){

    }

    return (
        <Box 
            h="40%"
            bg="#282828"
        >
            <Box as={Flex} justifyContent='left' alignItems='center' w="100%" h="26px" pl="10px" bg="#191919">
                <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>ProjectName</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Assets</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <Box overflow='scroll' w="100%" h="100%" pl="20px" pt="10px" display="flex" justifyContent="center" alignItems="center">
                <p>Qualquer coisa de asset.</p>
            </Box>
        </Box>
    );
}