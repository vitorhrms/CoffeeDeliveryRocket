import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Plus,
} from 'phosphor-react'
import * as S from './styles'
import { useState } from 'react'
import { Form } from './components/form'
import { useCart } from '../../context/CartContext'
import { coffeesOptions } from '../Home/options'
import { SelectedCoffees } from './components/CartInfo'
import { Link } from 'react-router-dom'

type PaymentTypes = 'credit' | 'debit' | 'cash' | 'none'

export const Checkout = () => {
  const { cartItems } = useCart();

  const [cepValue, setCepValue] = useState<string>('')
  const [streetValue, setStreetValue] = useState<string>('')
  const [numberValue, setNumberValue] = useState<string>('')
  const [compValue, setCompValue] = useState<string>('')
  const [distinctValue, setDistinctValue] = useState<string>('')
  const [cityValue, setCityValue] = useState<string>('')
  const [stateValue, setStateValue] = useState<string>('')
  const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentTypes>('none')

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

  const togglePaymentType = (type: PaymentTypes) => {
    setSelectedPaymentType(type)
  }

  const productQuantities = cartItems.reduce((acc: any, item: any) => {
    if (acc[item.id]) {
      acc[item.id] += item.quantity;
    } else {
      acc[item.id] = item.quantity;
    }
    return acc;
  }, {});

  const productsCart = Object.keys(productQuantities).map(id => {
    const coffees = coffeesOptions.find(coffees => coffees.id === parseInt(id));
    if (coffees) {
      return { ...coffees, quantity: productQuantities[id] };
    } else {
      return null;
    }
  }).filter(Boolean);

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
              <button type="button" className={selectedPaymentType === 'credit' ? 'active' : ''} onClick={() => togglePaymentType('credit')}>
                <CreditCard size={20} />
                CARTÃO DE CRÉDITO
              </button>
              <button type="button" className={selectedPaymentType === 'debit' ? 'active' : ''} onClick={() => togglePaymentType('debit')}>
                <Bank size={20} />
                CARTÃO DE DÉBITO
              </button>
              <button type="button" className={selectedPaymentType === 'cash' ? 'active' : ''} onClick={() => togglePaymentType('cash')}>
                <Money size={20} />
                DINHEIRO
              </button>
            </S.ButtonsContainer>
          </S.PaymentContainer>
        </div>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <S.SelectedCoffee>
          {productsCart && productsCart.map((coffees) => {
            if (coffees) {
              return (
                <SelectedCoffees 
                  key={coffees.id} 
                  id={coffees.id} 
                  title={coffees.title} 
                  quantity={coffees.quantity} 
                  logo={coffees.logo} 
                />
            )
            }
          })}
          <div style={{display: 'flex', justifyContent:'center'}}>
            <Link to={'/'}>
              <S.ButtonAdd type="button">
                  <Plus size={20} />
              </S.ButtonAdd>
            </Link>
          </div>
          <S.AmountDiv>
            <p>Total dos itens</p>
            <p>R$ {}</p>
          </S.AmountDiv>
          <S.AmountDiv>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </S.AmountDiv>
          <S.AmountDiv>
            <p style={{fontWeight:'bold', fontSize:'22px'}}>Total</p>
            <p style={{fontWeight:'bold', fontSize:'22px'}}>R$ {}</p>
          </S.AmountDiv>
          <S.ButtonConfirm>
            CONFIRMAR PEDIDO
          </S.ButtonConfirm>
        </S.SelectedCoffee>
      </div>
    </S.Checkout>
  )
}
