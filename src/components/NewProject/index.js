import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { EngineContext } from "../../contexts/Engine";

function NewProject() {

    const {CreateProject} = useContext(EngineContext);

    const [dir, setDir] = useState("");
    const [name, setName] = useState("New Project");

    async function selectDirectory() {
        const dir = await window.eAPI.selectDirectory();
        if(dir) setDir(dir);
    }

    return (
        <Flex justify='center' align='center' gap='15px' flexDir='column'>
            <Flex marginLeft='-18px' align='center' justify='center' gap='10px'>
                <Text>Name:</Text>
                <Input size='sm' width='500px' placeholder="New Project" onChange={(e) => setName(e.target.value)}></Input>
            </Flex>
            <Flex align='center' justify='center' gap='10px'>
                <Text>Directory: </Text>
                <Input size='sm' width='500px' value={dir} onChange={(e) => setDir(e.target.value)}></Input>
                <Button size='sm' onClick={selectDirectory}>...</Button>
            </Flex>
            <Button size='sm' width='200px' onClick={() => CreateProject(name, dir)}>Create New Project</Button>
        </Flex>
    );
}

export default NewProject;