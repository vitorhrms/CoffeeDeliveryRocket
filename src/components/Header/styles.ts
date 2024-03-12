import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 104px;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;

      text-decoration-line: none;

      border-radius: 8px;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &:first-child {
        width: auto;
        gap: 10px;
        padding: 0 1rem 0 0.5rem;
        color: ${(props) => props.theme.purple};
        background-color: ${(props) => props.theme.plight};
      }
      &:last-child {
        color: ${(props) => props.theme.ydark};
        background-color: ${(props) => props.theme.ylight};
      }
    }
  }
`
