import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100%;
  padding: 0 22rem;

  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
`
