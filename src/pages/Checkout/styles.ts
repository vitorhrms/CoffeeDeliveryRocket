import styled from 'styled-components'

const DefaultCard = styled.div`
  padding: 40px;
  border-radius: 6px;

  background-color: ${(props) => props.theme.card};
`

export const Checkout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.subtitle};

    margin: 1rem 0;
  }
`

export const AddressContainer = styled(DefaultCard)`
  height: 372px;
`

export const PaymentContainer = styled(DefaultCard)`
  height: 200px;
`

export const SelectedCoffee = styled(DefaultCard)`
  height: 372px;
  width: 440px !important;

  border-radius: 6px 40px;
`

export const ToSandAddress = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 2rem;

  p {
    &:first-child {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      color: ${(props) => props.theme.subtitle};
    }
    &:last-child {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      color: ${(props) => props.theme.text};
    }
  }

  svg {
    color: ${(props) => props.theme.ydark};
  }
`

export const Payment = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 2rem;

  p {
    &:first-child {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      color: ${(props) => props.theme.subtitle};
    }
    &:last-child {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      color: ${(props) => props.theme.text};
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Address = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    display: flex;
    align-items: center;
    gap: 9px;

    width: 178px;
    height: 51px;
    padding: 15px;

    background-color: ${(props) => props.theme.button};
    color: ${(props) => props.theme.text};
    border: 2px solid transparent;
    border-radius: 6px;

    font-size: 12px;
    font-family: 'Roboto', sans-serif;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background-color: ${(props) => props.theme.plight};
      border: 2px solid ${(props) => props.theme.purple};
    }
  }
`
