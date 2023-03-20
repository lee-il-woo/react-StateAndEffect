import './App.css';
import Head from './component/Head.js'
import Main from './component/Main.js'
import Footer from './component/Footer.js';
import { useEffect, useState } from 'react';
import NextWeek from './component/NextWeek';
import Unmount from './component/Unmount';

function App() {
  const [stateCount,setStateCount] = useState(0)
  let letCount = 0;

  const increase = ()=>{
    setStateCount(stateCount + 1)
    letCount++
  }
  const decrease = ()=>{
    setStateCount(stateCount - 1)
    letCount--
  }

  const [data,setData] = useState('원하는 데이터 값')
  const dataUp = ()=>{
    setData(data+"hello")
  }

/**유즈이펙트 29-43*/
  const [isShow,setIsShow] = useState(true)
  const handleShow = ()=>{
    if(isShow) setIsShow(false)
    if(!isShow) setIsShow(true)
  }

  // deps에 data 넣어보기
  useEffect(()=>{
    console.log('유즈이펙트 실행됨 ',data)

    return ()=>{
      console.log('클린업 실행됨 ',data)
      
      
    }
  },[data])


  const [isCount,setIsCount] = useState(true)

  return (
    <>
    <div>Head</div>
    <Head></Head>
    <Main></Main>
    <Footer></Footer>
    <Head></Head>
    {/* useState설명에서 사용 */}
    <h2>{stateCount}, {letCount}</h2>
    <button onClick={increase}>+1</button>
    <button onClick={decrease}>-1</button>
    
    {/* useEffect 설명에서 사용 */}
    <h2>{data}</h2>
    <button onClick={dataUp}>data+hello</button>

    {isShow && <Unmount></Unmount>}
    <button onClick={handleShow}>look Unmount</button>

    <NextWeek/>
    </>

  );
}

export default App;
