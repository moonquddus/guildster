import styled from 'styled-components';

export default styled.main`
  width: 90%;
  max-width: ${(props) => props.theme.width || '1000px'};
  min-height: 50vh;
  margin: 10% auto 0;
  background: #efc78c;
  box-shadow: 0px 0px 10px 0px;
  padding: 60px;
  position: relative;
`;
