import React, { useState } from 'react';
import styled from 'styled-components'
import { IToDo } from '../../types';

interface ToDoListItemProps {
  toDo: IToDo;
  id:number;
  toggleToDo:(index :number) => void;
  removeToDo:(index:number) => void;
}


const ToDoListItem: React.FC<ToDoListItemProps> = ({ toDo,toggleToDo,removeToDo, id }) => {
  const [isHover, setIsHover] = useState(false)

  const onChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
      console.log(e.target)
  }

  return (
    <StyledList onMouseOver={()=>setIsHover(true)} onMouseOut={()=>setIsHover(false)}>
      <StyledLabel completed={toDo.completed} >
        <input type='checkbox' checked={toDo.completed} onChange={()=>{toggleToDo(id)}} />
        {toDo.text}
      </StyledLabel>
    <StyledDeleteButton isHover={isHover} onClick={()=>{removeToDo(id)}}>🧽</StyledDeleteButton>
     </StyledList>
  );
};
export default ToDoListItem;


const StyledList = styled.li`
  list-style:none;
  font-size:24px;
  font-weight:bold;
  padding: 12px;
  cursor: pointer;


  input{
    width: 16px;
    height :16px;
    margin-right:16px;
  }
`

const StyledLabel = styled.label<{completed: boolean}>`
  text-decoration: ${p => p.completed ? "line-through": 'none' };
`

const StyledDeleteButton = styled.span<{isHover: boolean}>`
  padding-left: 12px;
  opacity: ${p => p.isHover ? 1: 0 };
  transition: all 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);

`