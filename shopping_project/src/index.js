import React from 'react';        // 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리
import ReactDOM from 'react-dom'; //  React 애플리케이션을 웹 페이지에 렌더링하기 위한 도구를 제공
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

