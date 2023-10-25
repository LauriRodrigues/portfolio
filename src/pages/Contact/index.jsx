import { Container } from './styles.js'
import { Box } from '../../components/Box'
import { Links } from '../../components/Links'

export function Contact() {
  return (
    <Container>
      <main>
        <Box
          title="Contato"
          text="Se você tem perguntas, comentários ou está interessado em discutir um projeto, fique à vontade para me enviar uma mensagem. Estou sempre disponível para discutir novas oportunidades e parcerias."
        >
          <div className="space"></div>
          <Links />
        </Box>
      </main>
    </Container>
  )
}
