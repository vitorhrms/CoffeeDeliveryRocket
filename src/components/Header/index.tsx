import * as S from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import Logocoffe from '../../assets/Logocoffe-header.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <S.HeaderContainer>
      <NavLink to="/" title="Logo Coffe Delivery">
        <img src={Logocoffe} alt="Logo Coffe Delivery" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Location">
          <MapPin size={24} weight="fill" />
          <p>São Paulo, SP</p>
        </NavLink>
        <NavLink to="checkout" title="Checkout">
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}
