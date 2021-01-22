import * as S from './styles'

const Main = () => (
  <S.Wrapper id="__next">
    <S.Logo src="/img/logo.svg" alt="An atom" />
    <S.Title>Boilerplate</S.Title>
    <S.Description>
      TypeScript, React, NextJS and Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer in front of a monitor with code in it"
    />
  </S.Wrapper>
)

export default Main
