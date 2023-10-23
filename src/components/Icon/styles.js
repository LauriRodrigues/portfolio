import styled from 'styled-components'
import { DEVICE } from '../../styles/brakepoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    height: 5.5rem;
  }

  &.bigIcon {
    img {
      height: 10rem;
      width: 10rem;
    }
  }

  ${DEVICE.lg} {
    &.bigIcon {
      flex-direction: row;
      margin-inline: 4rem;
      gap: 2.5rem;
    }
  }
`
