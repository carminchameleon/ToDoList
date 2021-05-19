import React from 'react';
import { ThemeProvider } from 'styled-components';
import Todo from './components/organisms/Todo';
import { theme, GlobalStyle } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Todo />
      </ThemeProvider>
    </>
  );
}

export default App;
