import styled from 'styled-components'

export default styled.div`
  margin-top: 10px;
  position: relative;

  & label {
    position: absolute;
    top: 10px;
    left: 15px;
    opacity: 0;
    transition: all .3s ease;
    font-size: 16px;
    z-index: -1;
  }

  & input {
    transition: 0.3s linear;

    &:not(:placeholder-shown) + label {
      z-index: 1;
      font-size: 12px;
      opacity: 0.8;
      transform: translate(0px, -25px)   
    }
  }
`;