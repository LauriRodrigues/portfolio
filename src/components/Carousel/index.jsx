import { Container } from './styles'
import { Card } from '../Card'

export const Carousel = ({ cardData }) => {
  return (
    <Container>
      {cardData.map((card, index) => (
        <div key={index}>
          <Card
            cardImage={card.cardImage}
            cardTitle={card.cardTitle}
            cardText={card.cardText}
            previewLink={card.previewLink}
            codeLink={card.codeLink}
            icons={card.icons}
          />
        </div>
      ))}
    </Container>
  )
}
