import styled from 'styled-components'
import { DEVICE } from '../../styles/brakepoints'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.7rem;

  ${DEVICE.lg} {
    &.column {
      flex-direction: column;
    }

    &.row {
      gap: 4rem;
      margin-bottom: 2rem;
    }

    margin-top: 0;
  }
`
