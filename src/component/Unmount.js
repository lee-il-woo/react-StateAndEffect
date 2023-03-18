
import { useEffect } from 'react';
function Unmount(){
useEffect(()=>{
    console.log('Unmount.js 마운트됬다')
    return ()=>{
        console.log('Unmount.js 언마운트됬다ㅜㅜ')
    }
},[])
    return(
        <>
        <div>언마운트</div>
        </>
    )
}
export default Unmount;