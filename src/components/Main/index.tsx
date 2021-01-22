import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'TypeScript, React, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="An atom" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer in front of a monitor with code in it"
    />
  </S.Wrapper>
)

export default Main
