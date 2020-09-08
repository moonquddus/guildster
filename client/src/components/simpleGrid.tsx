import styled from 'styled-components'

export const SimpleGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: stretch;
  grid-gap: 0 0;
  align-items: stretch;
  width: 100%;
  margin: 0 0 40px;
  padding: 0;
`;

export const Left = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const Right = styled.div`
  width: 90%;
  margin: 0 auto;
`
