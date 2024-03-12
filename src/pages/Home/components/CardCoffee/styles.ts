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

  margin-bottom: 30px;

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

export const PriceDiv = styled.div`
  display: flex;
  align-items: baseline;

  gap: 5px;

  font-size: 14px;
  color: ${(props) => props.theme.text};

  p {
    margin-right: 5px;

    font-family: 'Baloo 2', sans-serif;
    font-size: 28px;
    font-weight: bolder;
  }

  form {
    display: flex;
  }

  input[type='number'] {
    width: 25px;
    text-align: center;
    border: 1px solid #ccc;
    outline: none;
    -webkit-appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    background-color: ${(props) => props.theme.button};
    border: none !important;
  }

  button {
    background-color: ${(props) => props.theme.button};
    border: none;

    width: 36px;
    height: 38px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.pdark};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  .shoppingButton {
    margin-left: 10px;
    background-color: ${(props) => props.theme.pdark};
    border-radius: 5px;
    border: none;
  }
`
