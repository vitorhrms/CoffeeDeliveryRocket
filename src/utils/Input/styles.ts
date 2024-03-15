import styled from 'styled-components'

export const InputContainer = styled.input`
  width: 100%;
  height: 42px;
  padding: 15px;

  color: ${(props) => props.theme.label};
  background-color: ${(props) => props.theme.input};
  border: 1px solid ${(props) => props.theme.button};
  border-radius: 4px;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  outline: none;
`
