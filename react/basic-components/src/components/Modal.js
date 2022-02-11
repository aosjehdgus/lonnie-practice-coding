import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect } from 'react';
import Portal from './Portal';

function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  useEffect(() => {
    document.body.style.cssText = `
		position: fixed
		top: -${window.scrollY}px
		`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {children}
          {closable && (
            <CloseButton className="modal-close" onClick={close}>
              <AiOutlineClose />
            </CloseButton>
          )}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
}

Modal.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
};

Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  height: 200px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const CloseButton = styled.button`
  display: flex;
  width: 100%;
  background-color: inherit;
  border: 0px;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
`;

export default Modal;
