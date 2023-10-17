import { useState } from 'react'
import { Container } from './styles'
import { NavLink } from 'react-router-dom'
import LogoSVG from '../../assets/Logo.svg'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <Container isOpen={isOpen}>
      <div className="header">
        <img src={LogoSVG} alt="Logomarca escrito <LR/>" />

        <button
          className="buttonMenu"
          onClick={toggleMenu}
          aria-label="Abrir o Menu"
        >
          <div id="navIcon" className={isOpen ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <div className="menu">
        <ul>
          <li>
            <NavLink to="/" title="Home">
              <span>#</span>início
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre-mim" title="Sobre mim">
              <span>#</span>sobre-mim
            </NavLink>
          </li>
          <li>
            <NavLink to="/projetos" title="Projetos">
              <span>#</span>projetos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" title="Contato">
              <span>#</span>contato
            </NavLink>
          </li>
        </ul>
      </div>
    </Container>
  )
}
