import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color:grey;
    border:2px solid palevioletred;
`;

const RoundedButton = styled(Button)`
    border-radius:16px;    
`;

function Sample(props){
    return(
        <div>
            <Button>Nomal</Button>
            <RoundedButton>Rounded</RoundedButton>
        </div>
    )
}

export default Sample;