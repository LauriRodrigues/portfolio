import { Container } from './styles'

export function Link({ url, linkIcon, linkName }) {
  return (
    <Container>
      <a href={url} target="_blank" rel="noopener noreferrer" title={linkName}>
        <img src={linkIcon} alt={`Ícone ${linkName}`} />
      </a>
    </Container>
  )
}
