import * as S from './styles'
import CoffeeImage from '../../../../assets/Imagem-Coffee.svg'
import { TextDiv } from '../TextDiv'

export function Intro() {
  return (
    <S.Intro>
      <TextDiv />
      <div>
        <img src={CoffeeImage} alt="" />
      </div>
    </S.Intro>
  )
}
