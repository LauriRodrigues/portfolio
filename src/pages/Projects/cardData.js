import IgniteTimer from '../../assets/IgniteTimer.png'
import IgniteFeed from '../../assets/IgniteFeed.png'
import FoodExplorer from '../../assets/FoodExplorer.png'
import RocketNotes from '../../assets/RocketNotes.png'
import RocketPay from '../../assets/RocketPay.png'
import ConectaElas from '../../assets/ConectaElas.png'
import Html from '../../assets/Html.svg'
import Css from '../../assets/Css.svg'
import Js from '../../assets/Js.svg'
import React from '../../assets/React.svg'
import Node from '../../assets/Node.svg'

const htmlCssJs = [Html, Css, Js]
const htmlCssJsReact = [Html, Css, Js, React]
const htmlCssJsReactNode = [Html, Css, Js, React, Node]

export const cardData = [
  {
    cardImage: IgniteTimer,
    cardTitle: 'Ignite Timer',
    cardText:
      'Timer onde colocamos o nome da tarefa e o tempo de foco. Temos também uma página de acesso aos timers passados. (não responsivo)',
    icons: htmlCssJsReact,
    previewLink: 'https://ignitetimerreact.netlify.app/',
    codeLink: 'https://github.com/LauriRodrigues/Ignite-Timer'
  },
  {
    cardImage: IgniteFeed,
    cardTitle: 'Ignite Feed',
    cardText:
      'Página responsiva no estilo feed, onde podemos fazer comentários e curtir posts.',
    icons: htmlCssJsReact,
    previewLink: 'https://ignitefeedreact.netlify.app/',
    codeLink: 'https://github.com/LauriRodrigues/Ignite-Feed'
  },
  {
    cardImage: FoodExplorer,
    cardTitle: 'Food Explorer',
    cardText:
      'Cardápio digital de um restaurante fictício, onde temos separação de admin para cadastros e usuário para visualização e pedido.',
    icons: htmlCssJsReactNode,
    previewLink: 'https://foodexplorerreact.netlify.app/',
    codeLink: 'https://github.com/LauriRodrigues/FoodExplorer-front'
  },
  {
    cardImage: RocketNotes,
    cardTitle: 'RocketNotes',
    cardText: 'Aplicação de cadastro e filtro de notas.',
    icons: htmlCssJsReactNode,
    previewLink: 'https://ignitetimerreact.netlify.app/',
    codeLink: 'https://github.com/LauriRodrigues/RocketNotes-front'
  },
  {
    cardImage: RocketPay,
    cardTitle: 'RocketPay',
    cardText:
      'Formulário de preenchimento de cartão de crédito, onde as informações no cartão são atualizadas conforme o usuário digita.',
    icons: htmlCssJs,
    previewLink: 'https://explorer-lab-01-ten-alpha.vercel.app/',
    codeLink: 'https://github.com/LauriRodrigues/Explorer-Lab'
  },
  {
    cardImage: ConectaElas,
    cardTitle: 'Landing Page',
    cardText:
      'Landing page vencedora do concurso "Monte uma Landing Page de Sucesso" realizado pela Conecta Elas em parceria com a Rocketseat.',
    icons: htmlCssJs,
    previewLink: 'https://laurirodrigues.github.io/Landing-Page-Concurso/',
    codeLink: 'https://github.com/LauriRodrigues/Landing-Page-Concurso'
  }
]
