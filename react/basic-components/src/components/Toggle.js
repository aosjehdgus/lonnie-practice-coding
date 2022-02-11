import styled from 'styled-components';
import './style.css';

const ToggleCover = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

function Toggle() {
  return (
    <ToggleCover>
      <input type="checkbox" id="chk1" />
      <label for="chk1">
        <span>''</span>
      </label>
    </ToggleCover>
  );
}

export default Toggle;
