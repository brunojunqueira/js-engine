import { createContext } from "react";
import { useBreakpointValue } from "@chakra-ui/react";

export const SizeContext = createContext();

export function SizeState({ children }) {
    const smallWindow = useBreakpointValue({ base: true, xl: false });

    return (
        <SizeContext.Provider value={{ smallWindow: smallWindow }}>
            { children }
        </SizeContext.Provider>
    )
}