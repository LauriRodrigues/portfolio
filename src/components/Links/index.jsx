import { Container } from './styles'
import { Link } from '../Link'
import Linkedin from '../../assets/Linkedin.svg'
import Github from '../../assets/Github.svg'
import Email from '../../assets/Email.svg'
import Instagram from '../../assets/Instagram.svg'
import Twitch from '../../assets/Twitch.svg'

export function Links({ direction }) {
  return (
    <Container className={direction}>
      <Link
        url="https://www.linkedin.com/in/lauriana-rodrigues/"
        linkIcon={Linkedin}
        linkName="Linkedin"
      />

      <Link
        url="https://github.com/LauriRodrigues"
        linkIcon={Github}
        linkName="Github"
      />

      <Link
        url="mailto:laurianarodrigueslima@gmail.com"
        linkIcon={Email}
        linkName="Email"
      />

      <Link
        url="https://www.instagram.com/laurirodrigues2/?theme=dark"
        linkIcon={Instagram}
        linkName="Instagram"
      />

      <Link
        url="https://www.twitch.tv/lauri_rodrigues"
        linkIcon={Twitch}
        linkName="Twitch"
      />
    </Container>
  )
}
