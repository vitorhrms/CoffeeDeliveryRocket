import * as S from './styles'
import Americano from '../../../../assets/Type=Americano.svg'

// import { coffeesOptions } from './options'

export const CardCoffee = () => {
  return (
    <S.Card>
      <div>
        <img src={Americano} alt="" />
      </div>
      <S.YellowP>TRADICIONAL</S.YellowP>
      <S.TextDiv>
        <p>Expresso Tradicional</p>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </S.TextDiv>
    </S.Card>
  )
}
