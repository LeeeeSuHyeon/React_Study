
import './App.css';
import React, { useState } from 'react';
import LoginControl from "./component/LoginControl"
import ShoppingPage from './component/ShoppingPage';
import Guest from './component/Guest';


function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <LoginControl onLoginStatusChange={setIsLoggedIn} />
        {isLoggedIn && <ShoppingPage />}
        {!isLoggedIn && <Guest />}
    </div>

  );
}

export default App;

