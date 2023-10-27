import { useRef } from "react";

export const useScrollToRef = () => {
    const ref = useRef<HTMLDivElement|null>(null);

    const scrollToRef = () => {
        if(ref.current){
            ref.current.scrollIntoView({
                behavior:"smooth"
            })
        }
    }
    return {ref,scrollToRef}
}