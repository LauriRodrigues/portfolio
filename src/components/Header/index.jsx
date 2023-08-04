import { useState } from 'react'
import { Container } from './styles'
import LogoSVG from '../../assets/Logo.svg'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <Container isOpen={isOpen}>
      <header>
        <img src={LogoSVG} alt="Logomarca escrito <LR/>" />

        <button 
          onClick={toggleMenu}
          aria-label="Abrir o Menu"
        >
          <div id="navIcon" className={isOpen ? 'open' : ''} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      <div className="menu">
        <ul>
          <li><a href="#"><span>#</span>início</a></li>
          <li><a href="#"><span>#</span>sobre-mim</a></li>
          <li><a href="#"><span>#</span>projetos</a></li>
          <li><a href="#"><span>#</span>contato</a></li>
        </ul>
      </div>
      
    </Container>
  )
}