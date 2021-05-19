import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

input{
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  border: none;
  /* Browsers have different default form fonts */
  font-size: 13px;
  font-family: Arial;

  :focus {
    border: none;
  }

  :focus-visible {
    outline: none;
  }
}


`;

export default GlobalStyle;
