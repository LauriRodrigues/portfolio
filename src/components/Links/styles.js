import styled from 'styled-components'
import { DEVICE } from '../../styles/brakepoints'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 24rem;

  ${DEVICE.lg} {
    flex-direction: column;
    margin-top: 0;
  }
`
