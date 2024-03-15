/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles'

interface IInput {
  name: string
  placeholder: string
  setOnChange: React.Dispatch<React.SetStateAction<any>>
}

export const Input = ({ name, placeholder, setOnChange }: IInput) => {
  const handleChange = (value: any) => {
    setOnChange(value)
  }
  return (
    <S.InputContainer
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={(event) => handleChange(event.target.value)}
    />
  )
}
