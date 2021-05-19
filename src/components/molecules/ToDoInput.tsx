import React, { useState } from 'react';
import styled from 'styled-components';

const ToDoInput: React.FC = () => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;

    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('current', value);
  };

  return (
    <Container>
      Create. <br />
      Your Todo List
      <form onSubmit={onSubmit}>
        <Input value={value} onChange={onChange}></Input>
        <Button type='submit'>CREATE</Button>
      </form>
    </Container>
  );
};

export default ToDoInput;

const Container = styled.div`
  font-size: 36px;
  font-weight: bold;
  border: none;
`;

const Input = styled.input`
  display: block;
  width: 100vw;
  height: 50px;
  font-size: 32px;
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  padding: 15px 0px;
`;

const StyledForm = styled.form``;

// const StyledInput = styled.input`
//   margin: 24px 0px;
//   width: 80vw;
//   height: 100px;
//   display: block;
//   padding: 5px;
//   border: none;
//   background: rgba(0, 0, 0, 0);
//   font-size: 32px;
//   font-family: 'Source Sans Pro', sans-serif;
//   color: black;
//   font-weight: 300;
//   outline: none;
//   ::placeholder {
//     color: yellow;
//     opacity: 1; /* Firefox */

//     :focus {
//       outline-offset: 0px;
//       outline: none;
//     }
//   }
// `;

const Button = styled.button`
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 1.5;
  border: 1px solid white;
  color: white;
  background: none;
  text-decoration: none;
  padding: 0.73em 2.4em;
`;
