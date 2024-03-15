import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as S from './styles'
import { useState } from 'react'
import { Form } from './components/form'

export const Checkout = () => {
  const [cepValue, setCepValue] = useState<string>('')
  const [streetValue, setStreetValue] = useState<string>('')
  const [numberValue, setNumberValue] = useState<string>('')
  const [compValue, setCompValue] = useState<string>('')
  const [distinctValue, setDistinctValue] = useState<string>('')
  const [cityValue, setCityValue] = useState<string>('')
  const [stateValue, setStateValue] = useState<string>('')

  console.log(
    'cepValue',
    cepValue,
    'streetValue',
    streetValue,
    'numberValue',
    numberValue,
    'compValue',
    compValue,
    'distinctValue',
    distinctValue,
    'cityValue',
    cityValue,
    'stateValue',
    stateValue,
  )

  return (
    <S.Checkout>
      <div style={{ width: '100%' }}>
        <h1>Complete seu pedido</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <S.AddressContainer>
            <S.ToSandAddress>
              <MapPinLine size={24} />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </S.ToSandAddress>
            <S.Address>
              <Form
                setCepValue={setCepValue}
                setStreetValue={setStreetValue}
                setNumberValue={setNumberValue}
                setCompValue={setCompValue}
                setDistinctValue={setDistinctValue}
                setCityValue={setCityValue}
                setStateValue={setStateValue}
              />
            </S.Address>
          </S.AddressContainer>
          <S.PaymentContainer>
            <S.Payment>
              <CurrencyDollar size={24} />
              <div>
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </S.Payment>
            <S.ButtonsContainer>
              <button type="button">
                <CreditCard size={20} />
                CARTÃO DE CRÉDITO
              </button>
              <button type="button">
                <Bank size={20} />
                CARTÃO DE DÉBITO
              </button>
              <button type="button">
                <Money size={20} />
                DINHEIRO
              </button>
            </S.ButtonsContainer>
          </S.PaymentContainer>
        </div>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <S.SelectedCoffee></S.SelectedCoffee>
      </div>
    </S.Checkout>
  )
}
