import styled, { createGlobalStyle } from 'styled-components';

import Toggle from './components/Toggle';
import Modal from './components/Modal';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0px;
    margin:0px;
    width:100%;
    height:100vh;
 
  }
`;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalButton = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  border: 0px;
  border-radius: 12px;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  background-color: #0984e3;
  color: white;
`;

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <GlobalStyle />
      <Toggle />
      <ModalBox>
        <ModalButton onClick={openModal}>Open Modal</ModalButton>
        {modalVisible && (
          <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
          >
            Modal contents
          </Modal>
        )}
      </ModalBox>
    </>
  );
}

export default App;
