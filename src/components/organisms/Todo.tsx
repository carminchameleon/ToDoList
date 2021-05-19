import React, { useState } from 'react';
import styled from 'styled-components';
import ToDoInput from '../molecules/ToDoInput';
import ToDoListItem from '../molecules/ToDoListItem';
import { ITodo } from '../../types';

const Todo: React.FC = () => {
  const todos: Array<ITodo> = [
    { text: 'go to home', completed: false },
    { text: 'study Typescript', completed: false },
  ];

  return (
    <Background>
      <StyledTitle>🎈CARMEN'S TODO LIST</StyledTitle>
      <ToDoInput />
      {todos.map((todo) => {
        return <ToDoListItem todo={todo} />;
      })}
    </Background>
  );
};

export default Todo;

const Background = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 84px 64px;
  color: white;
`;

const StyledTitle = styled.div`
  font-size: 64px;
  font-weight: bold;
  color: white;
`;
