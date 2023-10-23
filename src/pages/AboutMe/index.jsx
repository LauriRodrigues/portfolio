import { Container } from './styles.js'
import { Box } from '../../components/Box'
import { Icon } from '../../components/Icon'
import { IconsGroup } from '../../components/IconsGroup'
import { Links } from '../../components/Links'
import AboutMeImage from '../../assets/AboutMeImage.svg'
import Html from '../../assets/Html.svg'
import Css from '../../assets/Css.svg'
import Js from '../../assets/Js.svg'
import React from '../../assets/React.svg'
import Node from '../../assets/Node.svg'
import Express from '../../assets/Express.svg'
import Git from '../../assets/Git.svg'
import GithubIcon from '../../assets/GithubIcon.svg'
import Vscode from '../../assets/Vscode.svg'
import Figma from '../../assets/Figma.svg'
import Organization from '../../assets/Organization.svg'
import Communication from '../../assets/Communication.svg'
import Teamwork from '../../assets/Teamwork.svg'
import Feedback from '../../assets/Feedback.svg'
import Creativity from '../../assets/Creativity.svg'
import Cats from '../../assets/Cats.svg'
import Books from '../../assets/Books.svg'
import Music from '../../assets/music.svg'
import Games from '../../assets/Games.svg'

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
          <IconsGroup>
            <Icon iconName={Html} textIcon="html" />

            <Icon iconName={Css} textIcon="css" />

            <Icon iconName={Js} textIcon="js" />

            <Icon iconName={React} textIcon="react" />

            <Icon iconName={Node} textIcon="node" />

            <Icon iconName={Express} textIcon="express" />

            <Icon iconName={Git} textIcon="git" />

            <Icon iconName={GithubIcon} textIcon="github" />

            <Icon iconName={Vscode} textIcon="vscode" />

            <Icon iconName={Figma} textIcon="figma" />
          </IconsGroup>
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
          <IconsGroup>
            <Icon iconName={Organization} textIcon="organização" />

            <Icon iconName={Communication} textIcon="comunicação" />

            <Icon iconName={Teamwork} textIcon="trabalho em equipe" />

            <Icon iconName={Feedback} textIcon="receptividade à feedback" />

            <Icon iconName={Creativity} textIcon="criatividade" />
          </IconsGroup>
        </Box>

        <Box title="Algumas curiosidades sobre mim ...">
          <IconsGroup>
            <Icon iconName={Cats} textIcon="Amo gatos e tenho 3!!" />

            <Icon
              iconName={Books}
              textIcon="Gosto muito de ler e estou sempre com um livrinho por perto.  Se tiver curiosidade de saber quais livros já li e estou lendo é só acessar minha página do Notion clicando aqui que deixo tudo registrado por lá!!"
            />

            <Icon iconName={Music} textIcon="Sempre gostei muito de cantar!!" />

            <Icon
              iconName={Games}
              textIcon="Também tenho como hobbie jogos online. Sempre que da um tempinho
                eu to jogando alguma coisa!! Inclusive já trabalhei por dois
                anos como Streamer de League of Legends na Twitch!!"
            />
          </IconsGroup>
        </Box>

        <Links />
      </main>
    </Container>
  )
}
