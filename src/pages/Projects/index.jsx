import { Container } from './styles.js'
import { Box } from '../../components/Box'
import { Links } from '../../components/Links'
import { Card } from '../../components/Card'
import IgniteTimer from '../../assets/IgniteTimer.png'

export function Projects() {
  return (
    <Container>
      <main>
        <Box
          title="Projetos"
          text="Caso queira dar uma conferida, aqui estão alguns dos projetos que desenvolvi nos últimos meses de estudos!!"
        >
          <Card
            cardImage={IgniteTimer}
            cardTitle="Ignite Timer"
            cardText="Aplicação de timer, onde colocamos o nome da tarefa e o tempo de foco. Temos também uma página de acesso aos timers passados."
            previewLink="https://ignitetimerreact.netlify.app/"
            codeLink="https://github.com/LauriRodrigues/Ignite-Timer"
          />
        </Box>
        <Links />
      </main>
    </Container>
  )
}
