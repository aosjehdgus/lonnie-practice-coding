import { useState } from 'react';
import styled from 'styled-components';

const ToggleBox = styled.div`
  position: relative;
  .toggle-box {
    top: 130px;
    left: 500px;
    background-color: #eeeeee;
    border: 2px solid #172774;
    border-radius: 10px;
    width: 70px;
    height: 30px;
    position: absolute;
    transition: 0.3s;
  }
  .toggle-box.toggle__checked {
    background-color: #ff0075;
  }
  .toggle-icon {
    top: 133px;
    left: 504px;
    background-color: #77d970;
    border: 2px solid #172774;
    width: 24px;
    height: 24px;
    border-radius: 7px;
    position: absolute;
    transition: 0.3s;
  }

  .toggle-icon.toggle__checked {
    left: 542px;
  }
`;

const ToggleState = styled.p`
    color: ${({ isOn }) => (isOn ? 'green' : 'red')}};
    top: 165px;
    font-weight: 900;
    left: 537px;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <ToggleBox onClick={toggleHandler}>
        <div className={isOn ? 'toggle-box toggle__checked' : 'toggle-box'} />
        <div className={isOn ? 'toggle-icon toggle__checked' : 'toggle-icon'} />
        <ToggleState isOn={isOn}>{isOn ? 'ON' : 'OFF'}</ToggleState>
      </ToggleBox>
    </>
  );
}

export default Toggle;
