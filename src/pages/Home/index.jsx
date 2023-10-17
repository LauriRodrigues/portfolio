import { Container } from './styles'
import HomeImage from '../../assets/HomeImage.svg'
import Linkedin from '../../assets/Linkedin.svg'
import Github from '../../assets/Github.svg'
import Email from '../../assets/Email.svg'
import Instagram from '../../assets/Instagram.svg'
import Twitch from '../../assets/Twitch.svg'

export function Home() {
  return (
    <Container>
      <main>
        <div className="box boxImage">
          <img src={HomeImage} alt="avatar Lauri Rodrigues" />
        </div>

        <h1>Lauri Rodrigues</h1>

        <p>
          {' '}
          <span>&gt;</span> Desenvolvedora front-end
        </p>

        <div className="links">
          <a
            href="https://www.linkedin.com/in/lauriana-rodrigues/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="Ícone Linkedin" />
          </a>

          <a
            href="https://github.com/LauriRodrigues"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="Ícone Github" />
          </a>

          <a
            href="mailto:laurianarodrigueslima@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Email} alt="Ícone Email" />
          </a>

          <a
            href="https://www.instagram.com/laurirodrigues2/?theme=dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Ícone Instagram" />
          </a>

          <a
            href="https://www.twitch.tv/lauri_rodrigues"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitch} alt="Ícone Twitch" />
          </a>
        </div>
      </main>
    </Container>
  )
}
