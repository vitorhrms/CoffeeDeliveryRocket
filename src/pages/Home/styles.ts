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
export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`
