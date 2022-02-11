import { createGlobalStyle } from 'styled-components';
import Toggle from './components/Toggle';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
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
