import React from 'react'
import { Container } from './styles'

export function Box({ title, text, children }) {
  const childElements = React.Children.toArray(children)

  const hasH1 = typeof title === 'string'
  const hasP = typeof text === 'string' || React.isValidElement(text)

  const hasImage = childElements.some(
    (child) => React.isValidElement(child) && child.type === 'img',
  )

  let className = ''

  if (hasImage) {
    if (hasH1 && hasP) {
      className = 'imageWithText'
    } else {
      className = 'onlyImage'
    }
  }

  return (
    <Container className={className}>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </Container>
  )
}
