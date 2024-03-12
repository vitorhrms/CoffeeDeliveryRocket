import styled from 'styled-components'

export const Card = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 40px;
  margin-top: 20px;

  background-color: ${(props) => props.theme.card};

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -20px;
  }
`

export const YellowP = styled.p`
  width: fit-content;
  border-radius: 20px;
  padding: 5px 10px;
  margin-top: 10px;

  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 10px;
  line-height: 130%;

  background-color: ${(props) => props.theme.ylight};
  color: ${(props) => props.theme.ydark};
`

export const TextDiv = styled.div`
  padding: 5px;
  text-align: -webkit-center;

  p {
    margin-top: 15px;
    &:first-child {
      font-family: 'Baloo 2', sans-serif;
      font-weight: bold;
      font-size: 20px;
      line-height: 130%;
      color: ${(props) => props.theme.subtitle};
    }
    &:last-child {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme.label};
    }
  }
`
