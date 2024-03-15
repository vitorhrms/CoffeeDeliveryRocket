import * as S from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

interface ICardCoffee {
  title: string
  subtitle: string
  types: string[]
  logo: string
}

export const CardCoffee = ({ title, subtitle, types, logo }: ICardCoffee) => {
  const [value, setValue] = useState(1)

  const handlePlus = () => {
    if (value < 10) {
      setValue(value + 1)
    } else {
      setValue(10)
    }
  }
  const handleMinus = () => {
    if (value <= 10) {
      setValue(value - 1)
    } else {
      setValue(10)
    }
    if (value <= 1) {
      setValue(1)
    }
  }

  return (
    <S.Card>
      <div>
        <img src={logo} alt="" />
      </div>
      <div style={{ display: 'flex' }}>
        {types.map((type) => {
          return <S.YellowP key={type}>{type}</S.YellowP>
        })}
      </div>
      <S.TextDiv>
        <p>{title}</p>
        <p>{subtitle}</p>
      </S.TextDiv>
      <S.PriceDiv>
        R$ <p>9,90</p>
        <form action="">
          <button type="button" onClick={handleMinus}>
            -
          </button>
          <input
            type="number"
            name="qnt"
            value={value}
            max={10}
            min={1}
            onChange={(e) => {
              const newValue = Number(e.target.value)
              if (newValue < 1) {
                setValue(1)
              } else if (newValue > 10) {
                setValue(10)
              } else {
                setValue(newValue)
              }
            }}
          />
          <button type="button" onClick={handlePlus}>
            +
          </button>
          <button type="submit" className="shoppingButton">
            <ShoppingCart size={20} weight="fill" />
          </button>
        </form>
      </S.PriceDiv>
    </S.Card>
  )
}
