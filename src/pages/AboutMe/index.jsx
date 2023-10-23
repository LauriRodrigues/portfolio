import { Container } from './styles.js'
import AboutMeImage from '../../assets/AboutMeImage.svg'
import { Box } from '../../components/Box'
import { IconsGroup } from '../../components/IconsGroup'
import { Links } from '../../components/Links'

export function AboutMe() {
  return (
    <Container>
      <main>
        <Box>
          <img src={AboutMeImage} alt="avatar Lauri Rodrigues" />
        </Box>

        <Box
          title="Sobre mim"
          text="Oii, eu sou a Lauriana, mas pode me chamar de Lauri! Tenho 25 anos e
            há pouco mais de um ano iniciei minha jornada como desenvolvedora
            web com foco em front-end. Tenho me apaixonado cada dia mais pela
            criação de experiências visuais envolventes e interativas."
        ></Box>

        <Box
          title="Hardskills"
          text="Meu foco principal está no desenvolvimento front-end, onde crio
            interfaces responsivas que resultem em uma boa experiência de
            usuário. Por isso, a busca por conhecimento é uma prioridade pra
            mim. Recentemente concluí o curso ‘Explorer’ (clique para mais
            detalhes) da Rocketseat, que me proporcionou uma visão mais ampla e
            uma sólida formação em desenvolvimento fullstack, me fazendo
            compreender a integração entre as diferentes camadas de uma
            aplicação, além de aprimorar minhas habilidades tanto no front-end
            quando no back-end. Abaixo estão as tecnologias que mais utilizo no
            meu dia a dia de estudos e projetos registrados no meu Github."
        >
          <IconsGroup groupType="hardskillsIcons" />
        </Box>

        <Box
          title="Softskills"
          text="Acredito que as softskills são a base essencial para o crescimento
            como profissional. Me considero uma pessoa organizada, mantendo os
            projetos bem estruturados. Priorizo o planejamento antes da execução
            para garantir melhor eficiência. Além disso, minhas experiências
            profissionais anteriores como Streamer e Suporte Técnico, me
            ajudaram a aprimorar minha habilidade de comunicação, o que
            viabiliza um bom trabalho em equipe. E claro, os feedbacks e
            críticas construtivas são uma oportunidade de aprendizado e
            aprimoramento, e para mim são sempre bem vindas!"
        >
          <IconsGroup groupType="softskillsIcons" />
        </Box>

        <Box title="Algumas curiosidades sobre mim ...">
          <IconsGroup groupType="curiositiesIcons" />
        </Box>

        <Links direction="row" />
      </main>
    </Container>
  )
}
