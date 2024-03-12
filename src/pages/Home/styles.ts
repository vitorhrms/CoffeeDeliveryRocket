import styled from 'styled-components'

export const Coffees = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;

  div {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      color: ${(props) => props.theme.title};
    }
  }
`
