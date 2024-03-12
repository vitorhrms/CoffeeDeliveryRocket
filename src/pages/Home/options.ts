import Americano from '../../assets/Type=Americano.svg'
import CafeGelado from '../../assets/Type=Café Gelado.svg'
import CafeComLeite from '../../assets/Type=Café com Leite.svg'
import Capuccino from '../../assets/Type=Capuccino.svg'
import ChocolateQuente from '../../assets/Type=Chocolate Quente.svg'
import Cubano from '../../assets/Type=Cubano.svg'
import ExpressoCremoso from '../../assets/Type=Expresso Cremoso.svg'
import Expresso from '../../assets/Type=Expresso.svg'
import Havaiano from '../../assets/Type=Havaiano.svg'
import Irlandês from '../../assets/Type=Irlandês.svg'
import Latte from '../../assets/Type=Latte.svg'
import Macchiato from '../../assets/Type=Macchiato.svg'
import Mochaccino from '../../assets/Type=Mochaccino.svg'
import Árabe from '../../assets/Type=Árabe.svg'

export const coffeesOptions = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    type: ['TRADICIONAL'],
    logo: Expresso,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    type: ['TRADICIONAL'],
    logo: Americano,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    type: ['TRADICIONAL'],
    logo: ExpressoCremoso,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    type: ['TRADICIONAL', 'GELADO'],
    logo: CafeGelado,
  },
  {
    id: 5,
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    type: ['TRADICIONAL', 'COM LEITE'],
    logo: CafeComLeite,
  },
  {
    id: 6,
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    type: ['TRADICIONAL', 'COM LEITE'],
    logo: Latte,
  },
  {
    id: 7,
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    type: ['TRADICIONAL', 'COM LEITE'],
    logo: Capuccino,
  },
  {
    id: 8,
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    type: ['TRADICIONAL', 'COM LEITE'],
    logo: Macchiato,
  },
  {
    id: 9,
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    type: ['TRADICIONAL', 'COM LEITE'],
    logo: Mochaccino,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    type: ['ESPECIAL', 'COM LEITE'],
    logo: ChocolateQuente,
  },
  {
    id: 11,
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    logo: Cubano,
  },
  {
    id: 12,
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    type: ['ESPECIAL'],
    logo: Havaiano,
  },
  {
    id: 13,
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    type: ['ESPECIAL'],
    logo: Árabe,
  },
  {
    id: 14,
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    type: ['ESPECIAL', 'ALCOÓLICO'],
    logo: Irlandês,
  },
]
