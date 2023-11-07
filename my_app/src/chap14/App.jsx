import React from "react";

const ThemeContext = React.createContext('Light');


function App(props){
    return (
        <ThemeContext.Provider value = "dark">
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar(props){
    return(
        <div>
            <ThemedButton />
        </div>
    )
}

function ThemedButton(props){
    return(
        <ThemeContext.Consumer>
            {value => <Button theme = {value} />}
        </ThemeContext.Consumer>
    )
}

function Button(props){
    return <button>{props.theme}</button>
}

export default App;