import { Input } from '../../../../utils/Input'
import * as S from './styles'

interface IForm {
  setCepValue: React.Dispatch<React.SetStateAction<string>>
  setStreetValue: React.Dispatch<React.SetStateAction<string>>
  setNumberValue: React.Dispatch<React.SetStateAction<string>>
  setCompValue: React.Dispatch<React.SetStateAction<string>>
  setDistinctValue: React.Dispatch<React.SetStateAction<string>>
  setCityValue: React.Dispatch<React.SetStateAction<string>>
  setStateValue: React.Dispatch<React.SetStateAction<string>>
}

export const Form = ({
  setCepValue,
  setStreetValue,
  setNumberValue,
  setCompValue,
  setDistinctValue,
  setCityValue,
  setStateValue,
}: IForm) => {
  return (
    <S.FormContainer>
      <S.GridContainerCep>
        <Input name="cep" placeholder="CEP" setOnChange={setCepValue} />
      </S.GridContainerCep>
      <Input name="street" placeholder="Rua" setOnChange={setStreetValue} />
      <S.GridContainerNumber>
        <Input
          name="number"
          placeholder="Número"
          setOnChange={setNumberValue}
        />
        <Input
          name="comp"
          placeholder="Complemento (opcional)"
          setOnChange={setCompValue}
        />
      </S.GridContainerNumber>
      <S.GridContainerCity>
        <Input
          name="district"
          placeholder="Bairro"
          setOnChange={setDistinctValue}
        />
        <Input name="city" placeholder="Cidade" setOnChange={setCityValue} />
        <Input name="state" placeholder="UF" setOnChange={setStateValue} />
      </S.GridContainerCity>
    </S.FormContainer>
  )
}
