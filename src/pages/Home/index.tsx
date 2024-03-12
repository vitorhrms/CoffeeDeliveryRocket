import * as S from './styles'
import { Intro } from './components/Intro'
import { CardCoffee } from './components/CardCoffee'
import { coffeesOptions } from './options'

export const Home = () => {
  return (
    <>
      <Intro />
      <S.Coffees>
        <div>
          <h1>Nossos cafés</h1>
        </div>
      </S.Coffees>
      <S.GridContainer>
        {coffeesOptions.map((coffee) => {
          return (
            <CardCoffee
              key={coffee.id}
              title={coffee.title}
              subtitle={coffee.subtitle}
              types={coffee.type}
              logo={coffee.logo}
            />
          )
        })}
      </S.GridContainer>
    </>
  )
}
