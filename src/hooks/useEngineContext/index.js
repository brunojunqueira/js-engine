import { useContext } from "react";
import { EngineContext } from "../../contexts/Engine/index.tsx";

export function useEngineContext() {
    const engineContext = useContext(EngineContext);
    
    return engineContext;
}