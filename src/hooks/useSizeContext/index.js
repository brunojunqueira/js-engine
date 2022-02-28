import { useContext } from "react";
import { SizeContext } from "../../contexts/SizeState";

export function useSizeContext() {
    const sizeContext = useContext(SizeContext);
    
    return sizeContext;
}