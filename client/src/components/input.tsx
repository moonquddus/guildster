import styled from 'styled-components'

export default styled.input`
  background: #ffdfb0;
  outline: none;
  border: none;
  border-radius: 0px;
  box-shadow: none;
  font-size: 16px;
  margin: 0 0 20px;
  padding: 10px 15px;
  width: 100%;
  border-bottom: solid 2px transparent;

  &:hover {
    background: #f7d6a6;
  }

  &:focus {
    border-color: #973926;
    outline: none;
  }
`;