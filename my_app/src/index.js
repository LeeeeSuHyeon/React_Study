import React from 'react';
// import ReactDOM from 'react-dom/client'; // 18버전에서는 /client를 없애야 함 
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';                         // 18버전 사용 x
// import reportWebVitals from './reportWebVitals';  // 18버전 사용 x


// // 이 형식이 중요함
// import Library from './chap03/Library';

//  // 18버전에서는 사용하는 방법
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Library />
//   </React.StrictMode>
// );

// // 이 형식이 중요함 (Library의 위치를 꼭 기억하고 작성해야 함) - 17버전 
// // import Libray from './chap03/Library';

// // ReactDOM.render(
// //   <React.StrictMode>
// //     {/* <App /> */}
// //     <Libray />        {/* 최종적을 사용할 컴포넌트 */}
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();  // 18버전 사용 x





// ------------------------------------------------------------
// 4.4 시계 만들기 
// import Clock from './chap04/Clock';

// setInterval(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);



// ------------------------------------------------------------
// 5.6 댓글 컴포넌트 만들기
// import CommentList from './chap05/CommentList';

// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ------------------------------------------------------------
// 과제 1 - chap3 변형
// import Grade from './chap03/Grade';

// ReactDOM.render(
//   <React.StrictMode>
//     <Grade />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ------------------------------------------------------------
// // 6장 - Notification 

// import NotificationList from './chap07/NotificationList';

// ReactDOM.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 7장 - Counter

// import Counter from './chap07/Counter';

// ReactDOM.render(
//   <React.StrictMode>
//     <Counter />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ------------------------------------------------------------
// 7장 - useRef

// import TextInputWithFocusButton from './chap07/TextInputWithFocusButton';

// ReactDOM.render(
//   <React.StrictMode>
//     <TextInputWithFocusButton />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 7장 - MeasureExample (useCallback)

// import MeasureExample from './chap07/MeasureExample';

// ReactDOM.render(
//   <React.StrictMode>
//     <MeasureExample />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 7장 - Accommodate 
// import Accommodate from './chap07/Accommodate';

// ReactDOM.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 8장 - Toggle
// import Toggle from './chap08/Toggle';

// ReactDOM.render(
//   <React.StrictMode>
//     <Toggle />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 8장 - Mybutton
// import Mybutton from './chap08/Mybutton';

// ReactDOM.render(
//   <React.StrictMode>
//     <Mybutton />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 8장 - ConfirmButton
// import ConfirmButton from './chap08/ConfirmButton';

// ReactDOM.render(
//   <React.StrictMode>
//     <ConfirmButton />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 8장 - EventPractice
// import EventPractice from './chap08/EventPractice';

// ReactDOM.render(
//   <React.StrictMode>
//     <EventPractice />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 8장 - Mybutton
// import Mybutton from './chap08/Mybutton';

// ReactDOM.render(
//   <React.StrictMode>
//     <Mybutton />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 9장 - Greeting
// import UserGreeting from './chap09/UserGreeting';

// ReactDOM.render(
//   <React.StrictMode>
//     <UserGreeting />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 9장 - MainPage
// import MainPage from './chap09/MainPage';

// ReactDOM.render(
//   <React.StrictMode>
//     <MainPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 9장 - LandingPage
// import LandingPage from './chap09/LandingPage';

// ReactDOM.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ------------------------------------------------------------
// 8주차 과제
// import LoginControl from './task/task';

// ReactDOM.render(
//   <React.StrictMode>
//     <LoginControl/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ------------------------------------------------------------
// 10장 - NumberList
// import NumberList from './chap10/NumberList';

// const numbers = [1,2,3,4,5];
// // const todoItems = todos.map((todo)=>
// //   <li key = {todo.id}>
// //     {todo}
// //   </li>
// // )

// // const todoItems = todos.map((todo, index)=>
// //   <li key = {index}>
// //     {todo}
// //   </li>
// // )

// ReactDOM.render(
//   <React.StrictMode>
//     <NumberList numbers = {numbers}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // // ------------------------------------------------------------
// // // 10장 - AttendanceBook
// import AttendanceBook from './chap10/AttendanceBook';

// ReactDOM.render(
//   <React.StrictMode>
//     <AttendanceBook />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 10장 - IterationSample
// import IterationSample from './chap10/IterationSample';

// ReactDOM.render(
//   <React.StrictMode>
//     <IterationSample />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 11장 -  NameForm;
// import NameForm from './chap11/NameForm';

// ReactDOM.render(
//   <React.StrictMode>
//     <NameForm />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 11장 -  RequestForm;
// import RequestForm from './chap11/RequestForm';

// ReactDOM.render(
//   <React.StrictMode>
//     <RequestForm />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 11장 -  FruitSelect;
// import FruitSelect from './chap11/FruitSelect';

// ReactDOM.render(
//   <React.StrictMode>
//     <FruitSelect />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 11장 -  SignUp;
// import SignUp from './chap11/SignUp';

// ReactDOM.render(
//   <React.StrictMode>
//     <SignUp />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 11장 -  Reservation;
// import Reservation from './chap11/Reservation';

// ReactDOM.render(
//   <React.StrictMode>
//     <Reservation />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// // ------------------------------------------------------------
// // 12장 -  Calculator;
// import Calculator from './chap12/Calculator';

// ReactDOM.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 13장 -  WelcomeDialog;
// import WelcomeDialog from './chap13/WelcomeDialog';

// ReactDOM.render(
//   <React.StrictMode>
//     <WelcomeDialog />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 13장 -  SignUpDialog;
// import SignUpDialog from './chap13/SignUpDialog';

// ReactDOM.render(
//   <React.StrictMode>
//     <SignUpDialog />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 13장 -  ProfileCard;
// import ProfileCard from './chap13/ProfileCard';

// ReactDOM.render(
//   <React.StrictMode>
//     <ProfileCard />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 14장 -  App;
// import App from './chap14/App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ------------------------------------------------------------
// // 14장 -  DarkOrLight;
// import DarkOrLight from './chap14/DarkOrLight';

// ReactDOM.render(
//   <React.StrictMode>
//     <DarkOrLight />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 15장 -  MainPage;
// import MainPage from './chap15/MainPage';

// ReactDOM.render(
//   <React.StrictMode>
//     <MainPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 15장 -  Blocks;
// import Blocks from './chap15/Blocks';

// ReactDOM.render(
//   <React.StrictMode>
//     <Blocks />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // ------------------------------------------------------------
// // 15장 -  Sample;
// import Sample from './chap15/Sample';

// ReactDOM.render(
//   <React.StrictMode>
//     <Sample />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ------------------------------------------------------------
// 8주차 과제
import LoginControl from './task/task';

ReactDOM.render(
  <React.StrictMode>
    <LoginControl/>
  </React.StrictMode>,
  document.getElementById('root')
);