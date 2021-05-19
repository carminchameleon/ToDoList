import React, { useState } from 'react';
import styled from 'styled-components';

import ToDoListItem from '../molecules/ToDoListItem';
import AlertMessage from '../atoms/AlertMessage'
import { IToDo } from '../../types';


const initialToDos =   [
  { text: 'Go to home', completed: true},
  { text: 'Study typescript', completed: false},
  { text: 'Eat delicious food', completed: false},
]

const Todo: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [toDoList, setToDoList] = useState<IToDo[]>(initialToDos)
  const [showAlert, setShowAlert] = useState(false) 

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(value === ""){
      setShowAlert(true)
      return
    }
    const newToDoList :IToDo[] = [...toDoList, {text:value, completed : false}]
    setToDoList(newToDoList)
    setValue('')
  };

  const toggleToDo = (id : number) :void => {
    const newList = toDoList.map((item, index)=>{
      if(index === id){
        return {
          ...item,
          completed: !item.completed
        }
      } else {
       return  item
      }
    })
     setToDoList(newList)
  }


  const removeToDo = (id : number) :void => {
    const newList = toDoList.filter((item,index)=>{
      return index !== id
    })
      setToDoList(newList)
 }

 

  return (
    <Background>
      <Container>
        <StyledTitle>⛱ To Do List</StyledTitle>
        <InputContainer onSubmit={onSubmit}>
        {/* <form onSubmit={onSubmit}> */}
          <StyledInput value={value} onChange={onChange}></StyledInput>
          <StyledCreateButton type='submit'>ADD</StyledCreateButton>
        {/* </form> */}
      </InputContainer>
      <ListContainer>
        {toDoList.map((toDo,index) => {
          return <ToDoListItem toDo={toDo} key={toDo.text} toggleToDo={toggleToDo} removeToDo={removeToDo} id={index} />;
        })}
        </ListContainer>
     </Container>
    <AlertMessage showAlert={showAlert} setShowAlert={setShowAlert}/>
    </Background>
  );
};

export default Todo;


const Background = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  padding-top: 102px;
  min-width: 880px;
`

const StyledTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin-bottom:24px;
`;

const InputContainer = styled.form`
  font-size: 48px;
  /* border: 1px solid red;  */
  color: white;
  display: flex;
 `;


const StyledInput = styled.input`
  display: inline-block;
  width:100%;
  
  /* height: 50px; */
  font-size: 24px;
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  border-bottom: 1px solid white;
  /* margin: 16px 0px; */
`;


const StyledCreateButton = styled.button`
  margin-left: 12px;
  float: right;
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 1.5;
  border: 1px solid white;
  color: white;
  background: none;
  text-decoration: none;
  padding: 12px 24px;
  cursor: pointer;
`;

const ListContainer = styled.div`
padding-top:64px;
`