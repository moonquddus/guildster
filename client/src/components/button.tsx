import styled from 'styled-components';

// TODO: Use ThemeProvider rather than hacking some variables together
/*
Const buttonThemes = {
  redTheme: {
    background: 'linear-gradient(0deg, rgba(174,22,0,1) 0%, rgba(174,22,0,1) 50%, rgba(203,44,22,1) 50%, rgba(203,44,22,1) 100%)',
    border: 'linear-gradient(0deg, rgba(199,40,18,1) 0%, rgba(199,40,18,1) 50%, rgba(224,65,43,1) 50%, rgba(224,65,43,1) 100%)',
  },
  long: {
    minWidth: '200px',
  },
  fullWidth: {
    minWidth: '100%',
  },
};
*/

export default styled.button`
  justify-self: ${(props) => props.theme.align || 'center'};
  position: relative;
  background: linear-gradient(0deg, rgba(174,22,0,1) 0%, rgba(174,22,0,1) 50%, rgba(203,44,22,1) 50%, rgba(203,44,22,1) 100%);
  border: solid 6px;
  border-image: linear-gradient(0deg, rgba(199,40,18,1) 0%, rgba(199,40,18,1) 50%, rgba(224,65,43,1) 50%, rgba(224,65,43,1) 100%);
  border-image-slice: 1;
  color: #ffdfb0;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: -1px;
  outline: none;
  box-shadow: 3px 3px 0px 0px rgb(0, 0, 0, 0.2);
  margin: auto;
  padding: ${(props) => props.theme.height || '10px'} 15px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  min-width: auto;
  width: ${(props) => props.theme.width || 'auto'};

  &:hover {
    color: #f7d6a6;
  }

  &:active {
    transform: translateY(2px);
  }
`;
