// App.js
import React, { useState } from 'react';
import LoginControl from "./component/LoginControl"
import ShoppingPage from './component/ShoppingPage';
import Guest from './component/Guest';


function App(props) {
  // 로그인 상태를 관리하는 상태 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* 로그인 상태에 따라 ShoppingPage, Guest 컴포넌트를 조건부 렌더링 */}
      <LoginControl onLoginStatusChange={setIsLoggedIn} />
        {isLoggedIn && <ShoppingPage />}
        {!isLoggedIn && <Guest />}
    </div>

  );
}

export default App;

