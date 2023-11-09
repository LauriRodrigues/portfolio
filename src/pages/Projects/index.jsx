import { Container } from './styles.js'
import { Box } from '../../components/Box'
import { Links } from '../../components/Links'
import { Carousel } from '../../components/Carousel'
import { cardData } from './cardData.js'

export function Projects() {
  return (
    <Container>
      <main>
        <Box
          title="Projetos"
          text="Caso queira dar uma conferida, aqui estão alguns dos projetos que desenvolvi nos últimos meses de estudos!!"
        >
          <Carousel cardData={cardData} />
        </Box>
        <Links />
      </main>
    </Container>
  )
}
