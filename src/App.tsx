import React from 'react';
import { ThemeProvider } from 'styled-components';
import ToDo from './components/organisms/Todo'
import { theme, GlobalStyle } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}> 
        <ToDo />
      </ThemeProvider>
    </>
  );
}

export default App;
