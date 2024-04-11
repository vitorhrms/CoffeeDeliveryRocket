import styled from 'styled-components'

export const Item = styled.div`
    display: flex;
    gap: 1.5rem;
    width: 100%;

    img {
        width: 5rem;
    }
`

export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    color: ${(props) => props.theme.text};

    p:last-child {
        font-weight: bolder;
    }
`

export const PriceDiv = styled.div`
  display: flex;
  align-items: center;

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
    height: 38px;
    width: 25px;
    text-align: center;
    border: 1px solid #ccc;
    outline: none;
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
    cursor: pointer;

    width: 36px;
    height: 38px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.pdark};

    svg {
      color: ${(props) => props.theme.pdark};
    }
  }
`

export const ButtonRemove = styled.button `
    width: auto !important;

    color: ${(props) => props.theme.pdark};
    border-radius: 5px;
    border: none;
    
    margin-left: 10px;
    padding: 10px;
    gap: 5px;

    p {
        font-size: 12px;
        font-family: monospace;
        letter-spacing: 1px;
        color: ${(props) => props.theme.text };
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 0px;
    margin: 15px 0;

    color: ${(props) => props.theme.button };

    border: 1px solid;
`