import { Container } from './styles'

export function Icon({ iconName, textIcon, iconSize }) {
  return (
    <Container className={iconSize}>
      <img src={iconName} alt="" />
      <p>{textIcon}</p>
    </Container>
  )
}
