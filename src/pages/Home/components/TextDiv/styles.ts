import styled from 'styled-components'

export const TextBox = styled.div`
  width: 588px;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme.title};
    margin-bottom: 15px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme.subtitle};
    margin-bottom: 5rem;
  }

  div {
    div {
      div {
        display: flex;
        align-items: center;
        gap: 10px;

        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: ${(props) => props.theme.subtitle};
      }
    }
  }
`

export const ImgIcon = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    color: ${(props) => props.theme.white};
  }
`
