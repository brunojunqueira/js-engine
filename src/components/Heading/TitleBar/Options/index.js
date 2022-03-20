import { Flex } from "@chakra-ui/react";
import TitleOption from "../Titleoption";
import { useEngineContext } from "../../../../hooks/useEngineContext";

export default function Options({...props}){
    const { ResetProject, OpenProject } = useEngineContext();

    const arquivo = {
        name:'Arquivo', 
        menu:[
            {name:'Novo Projeto', func: (value=null) => ResetProject(value)}, 
            {name:'Abrir Projeto', func: () => { OpenProject() }}
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