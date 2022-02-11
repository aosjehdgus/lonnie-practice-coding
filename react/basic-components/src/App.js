import { createGlobalStyle } from 'styled-components';

import Toggle from './components/Toggle';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0px;
    margin:0px;
    width:100%;
    height:100vh;
 
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Toggle />
    </>
  );
}

export default App;
