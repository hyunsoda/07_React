// ThemeToggle.js

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// 테마를 토글하는 버튼 컴포넌트 
const ThemeToggle = () => {

    // useContext Hook을 사용하여 ThemeContext의 값 중 toggleTheme 함수를 가져오기
    // themeContext에 있는 value값 중 toggleTheme을 이용할 것이다
    const { toggleTheme} = useContext(ThemeContext);

    // 버튼 클릭 시 toggleTheme 함수 호출
    return <button onClick={toggleTheme}>테마 토글</button>
}

export default ThemeToggle;