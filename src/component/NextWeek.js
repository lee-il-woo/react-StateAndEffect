import { useRef } from "react";

function NextWeek(){
    const refCount = useRef(0)
    const upCount = ()=>{
        ++refCount.current
    }
    return(
        <>
        <h1>{refCount.current}</h1>
        <button onClick={upCount}>+1</button>
        </>
    )
}
export default NextWeek;