import styled from 'styled-components'

const GridContainerDefault = styled.div`
  display: grid;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  div {
    gap: 1rem;
  }
`

export const GridContainerCep = styled(GridContainerDefault)`
  grid-template-columns: 1fr 1fr 1fr;
`

export const GridContainerNumber = styled(GridContainerDefault)`
  grid-template-columns: 1fr 2fr;
`

export const GridContainerCity = styled(GridContainerDefault)`
  grid-template-columns: 1fr 1.6fr 0.3fr;
`
