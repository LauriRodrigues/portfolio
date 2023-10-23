import { Container } from './styles'
import { Links } from '../../components/Links'
import HomeImage from '../../assets/HomeImage.svg'

export function Home() {
  return (
    <Container>
      <main>
        <div className="boxImage">
          <img src={HomeImage} alt="avatar Lauri Rodrigues" />

          <div className="textBox">
            <h1>
              Lauri <br /> Rodrigues
            </h1>

            <p>
              <span>&gt;</span> Desenvolvedora front-end
            </p>
          </div>
        </div>

        <Links />
      </main>
    </Container>
  )
}
