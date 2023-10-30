import { Container } from './styles'
import PreviewSVG from '../../assets/PreviewLink.svg'
import GithubSVG from '../../assets/Github.svg'
import Html from '../../assets/Html.svg'
import Css from '../../assets/Css.svg'
import Js from '../../assets/Js.svg'
import React from '../../assets/React.svg'

export function Card({
  cardImage,
  cardTitle,
  cardText,
  previewLink,
  codeLink,
}) {
  return (
    <Container>
      <img className="projectImage" src={cardImage} alt="" />
      <div className="cardContent">
        <div className="cardText">
          <h2>{cardTitle}</h2>
          <p>{cardText}</p>
        </div>
        <div className="cardIcons">
          <img src={Html} alt="" />
          <img src={Css} alt="" />
          <img src={Js} alt="" />
          <img src={React} alt="" />
        </div>
        <div className="cardLinks">
          <div className="cardLink">
            <img src={PreviewSVG} alt="ícone de Link" />
            <a href={previewLink} target="_blank" rel="noreferrer">
              Live Preview
            </a>
          </div>
          <div className="cardLink">
            <img src={GithubSVG} alt="ícone do Github" />
            <a href={codeLink} target="_blank" rel="noreferrer">
              View Code
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}
