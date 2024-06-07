import logo from "./logo.svg";
import "./App.css";
import Exam1 from "./exam/Exam1";
import Exam2 from "./exam/Exam2";
import Exam3 from "./exam/Exam3";
import Exam4 from "./exam/Exam4";
import Exam5 from "./exam/Exam5";
import Exam6_1, {Exam6_2, Exam6_3} from "./exam/Exam6"; // default가 아닌 함수 부르기
import { ThemeProvider } from "./contextAPI/ThemeContext";
import ThemeToggle from "./contextAPI/ThemeToggle";
import ThemeComponent from "./contextAPI/ThemeComponent";
import TodoList from "./todoList/TodoList";

// 터미널 ctrl + shirt + ` 로 열고
// 터미널에서 yarn start 서버 켜기
// 터미널에서 ctrl + c 서버 끄기

function App() {
  return (
    <div className="App">
      {/* 여러가지 컴포넌트 불러다 쓸겁니다. */}
      {/* ctrl + / : jsx 주석 */}

     {/* <Exam1 /> */}
     {/* 파일명이 아닌 컴포넌트명 부르기*/ }
      {/* <Exam2/>  */}
      {/* <Exam3/> */}
      {/* <Exam4/> */}
      {/* <Exam5/> */}
      {/* <Exam6_1 isLogin={true}/>   */}    {/*isLogin이라는 이름으로 true prop값 전달 */}
      {/* <Exam6_2/>
      <Exam6_3 label="클릭해보세요~"/> */}
      {/* themeProvider 안에 작성된 값은 themeProvider children값으로 들어옴 */}
      {/* <ThemeProvider>
             <ThemeToggle/>  */}  {/* 첫 번째 children theme, 혹은 toggleTheme 사용 가능*/}
          {/* <ThemeComponent/> */}  {/* 두 번째 children */}
      {/* </ThemeProvider>*/}
    <TodoList/> 
      
    </div>
  );
}

export default App;
