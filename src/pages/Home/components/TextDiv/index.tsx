import * as S from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export const TextDiv = () => {
  return (
    <S.TextBox>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <p>
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </p>
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <S.ImgIcon style={{ backgroundColor: '#C47F17' }}>
              <ShoppingCart size={20} weight="fill" />
            </S.ImgIcon>
            Compra simples e segura
          </div>
          <div>
            <S.ImgIcon style={{ backgroundColor: '#DBAC2C' }}>
              <Timer size={20} weight="fill" />
            </S.ImgIcon>
            Entrega rápida e rastreada
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <S.ImgIcon style={{ backgroundColor: '#574F4D' }}>
              <Package size={20} weight="fill" />
            </S.ImgIcon>
            Embalagem mantém o café intacto
          </div>
          <div>
            <S.ImgIcon style={{ backgroundColor: '#8047F8' }}>
              <Coffee size={20} weight="fill" />
            </S.ImgIcon>
            O café chega fresquinho até você
          </div>
        </div>
      </div>
    </S.TextBox>
  )
}
