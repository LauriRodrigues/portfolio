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
  
      <div className="header">
        <img src={LogoSVG} alt="Logomarca escrito <LR/>" />

        <button 
          className="buttonMenu"
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
      </div>

      <div className="menu">
        <ul>
          <li><a href="/home"><span>#</span>início</a></li>
          <li><a href="/sobre-mim"><span>#</span>sobre-mim</a></li>
          <li><a href="/projetos"><span>#</span>projetos</a></li>
          <li><a href="/contato"><span>#</span>contato</a></li>
        </ul>
      </div>
      
    </Container>
  )
}