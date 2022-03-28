import { Flex } from "@chakra-ui/react";
import TitleOption from "../Titleoption";
import { useEngineContext } from "../../../../hooks/useEngineContext";

export default function Options({...props}){
    const { ResetProject, OpenProject, SaveProject } = useEngineContext();

    const arquivo = {
        name:'Arquivo', 
        menu:[
            {name:'New Project', func: (value=null) => ResetProject(value)}, 
            {name:'Open Project', func: OpenProject },
            {name:'Save', func: SaveProject }
        ]
    };

    const editar = {
        name:'Editar',
        menu:[
            {name:'Desfazer', func: () => {}}
        ]
    }
    

    return(
        <Flex color='white' position='absolute' top='0' left='45px' fontSize='12px' align='center' {...props}>
            <TitleOption option={arquivo} />
            <TitleOption option={editar} />
        </Flex>
    )
}