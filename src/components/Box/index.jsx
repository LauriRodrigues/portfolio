import React from 'react'
import { Container } from './styles'

export function Box({ title, text, children }) {
  const childElements = React.Children.toArray(children)

  const hasImage = childElements.some(
    (child) => React.isValidElement(child) && child.type === 'img',
  )

  const hasH1 = childElements.some(
    (child) => React.isValidElement(child) && child.type === 'h1',
  )

  const hasP = childElements.some(
    (child) => React.isValidElement(child) && child.type === 'p',
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
