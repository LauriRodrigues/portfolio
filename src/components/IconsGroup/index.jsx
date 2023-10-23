import { Container } from './styles'
import { Icon } from '../Icon'
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

export function IconsGroup({ groupType }) {
  let iconsToRender = null

  if (groupType === 'hardskillsIcons') {
    iconsToRender = (
      <Container>
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
      </Container>
    )
  } else if (groupType === 'softskillsIcons') {
    iconsToRender = (
      <Container>
        <Icon iconName={Organization} textIcon="organização" />
        <Icon iconName={Communication} textIcon="comunicação" />
        <Icon iconName={Creativity} textIcon="criatividade" />
        <Icon iconName={Teamwork} textIcon="trabalho em equipe" />
        <Icon iconName={Feedback} textIcon="receptividade à feedback" />
      </Container>
    )
  } else if (groupType === 'curiositiesIcons') {
    iconsToRender = (
      <Container>
        <Icon
          iconSize="bigIcon"
          iconName={Cats}
          textIcon="Amo gatos e tenho 3!!"
        />
        <Icon
          iconSize="bigIcon"
          iconName={Books}
          textIcon="Gosto muito de ler e estou sempre com um livrinho por perto.  Se tiver curiosidade de saber quais livros já li e estou lendo é só acessar minha página do Notion clicando aqui que deixo tudo registrado por lá!!"
        />
        <Icon
          iconSize="bigIcon"
          iconName={Music}
          textIcon="Sempre gostei muito de cantar!!"
        />

        <Icon
          iconSize="bigIcon"
          iconName={Games}
          textIcon="Também tenho como hobbie jogos online. Sempre que da um tempinho eu to jogando alguma coisa!! Inclusive já trabalhei por dois anos como Streamer de League of Legends na Twitch!!"
        />
      </Container>
    )
  }

  return iconsToRender
}
