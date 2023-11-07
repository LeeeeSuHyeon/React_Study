// 리액트 컴포넌트는 대문자 시작해야 함 (기억해야 함)
function MyButton(props){
    const[isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        {onClick : ()=> setIsClicked(true)},    // 이벤트 처리 onClick 대문자 처리 
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);