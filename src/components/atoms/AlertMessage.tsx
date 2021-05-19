import React from 'react'
import styled from 'styled-components';


interface AlertMessageProps {
showAlert: boolean;
setShowAlert : (bol : boolean) => void;  
}

const AlertMessage : React.FC<AlertMessageProps> = ({ showAlert,setShowAlert}) =>{
return (
        <Container showAlert={showAlert}>
        <div>🧐 write plz!</div>
      <ConfirmButtonContainer>
        <span onClick={()=>{setShowAlert(false)}}>OKAY</span>
      </ConfirmButtonContainer>
       </Container>
    )
}


export default AlertMessage


const Container = styled.div<{showAlert : boolean}>`
position: absolute;
display: flex;
flex-direction: column;
top: ${p => p.showAlert ? '12vh' : "-15vh"};
transition: top 0.1s linear;
width: 400px;
border-radius:12px;
background-color: purple;
padding:  18px 24px;
font-size: 16px;
font-weight: bold;
color: white;
`

const ConfirmButtonContainer = styled.div`
margin-top:12px;
display: flex;
justify-content: flex-end;
color: yellow;
cursor: pointer;
`

