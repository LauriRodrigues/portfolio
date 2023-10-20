import { Container } from './styles'

export function Icon({ iconName, textIcon }) {
  return (
    <Container>
      <img src={iconName} alt="" />
      <p>{textIcon}</p>
    </Container>
  )
}
