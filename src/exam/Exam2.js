// Component 예제 2

import { useState } from "react";

// 함수형 컴포넌트 
function Exam2(){
    
    // 함수형 컴포넌트에서 상태를 사용하는 방법
    const [name, setName] = useState("소현"); // Hooks : react에서 만들어놓은 기능 모음
                                                // useState : 상태값을 손쉽게 다루게 해주는 hook

    const handleClick = ()=>{
        setName("홍길동");
    }

    return( // 함수형 컴포넌트는 render() 함수 제외하고 바로 return 작성하면 된다
        <div>
            <h1>Hello, {name}</h1>
            <button onClick={handleClick}>이름 바꾸기</button>
        </div>

    );
}

export default Exam2;
// this는 클래스형 컴포넌트에서만 사용