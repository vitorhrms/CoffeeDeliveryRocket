import * as S from './styles'
import { Trash } from "phosphor-react"
import { useCart } from "../../../../context/CartContext"
import { getValue } from '../../../../helpers/getValue'

export interface ISelectedCoffee {
    id: number
    title: string
    quantity: number
    logo: string
  }

export const SelectedCoffees = ({ id, title, quantity, logo }: ISelectedCoffee) => {
    const { removeFromCart } = useCart();

    const handleRemoveToCart = (id: number) => {
        removeFromCart(id)
    }

    return (
    <>
        <S.Item>
            <img src={logo} alt="" /> 
            <div style={{width: '100%'}}>
                <S.TitleDiv>
                    <p>{title}</p>
                    <p>R$ {getValue(quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2})}</p>
                </S.TitleDiv>
                <S.PriceDiv>
                    <p>{quantity}</p>
                    <S.ButtonRemove type="button" className="removeButton" onClick={() => handleRemoveToCart(id)}>
                        <Trash size={20} />
                        <p>REMOVER</p>
                    </S.ButtonRemove>
                </S.PriceDiv>
            </div>
        </S.Item>
        <S.Divider />
    </>
    )
}