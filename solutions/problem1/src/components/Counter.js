// react 라이브러리에서 useState 불러오기
import React, { useState } from 'react'
import "../index.css"

function Counter(){
    // useState 함수 (초기값 0) 의 결과를 counter, setCounter 변수에 할당
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter => counter + 1);
    }
    const decreaseCounter = () => {
        setCounter(counter => counter - 1);
    }
    
    return(
      <div className="counter">
        <h2> 카운터 </h2>
        <div>{ counter }</div>
        <button onClick={increaseCounter}>증가하기</button>
        <button onClick={decreaseCounter}>감소하기</button>
      </div>
    );
}

export default Counter