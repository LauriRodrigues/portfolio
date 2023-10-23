import styled from 'styled-components'
import { DEVICE } from '../../styles/brakepoints'

export const Container = styled.div`
  img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
    width: 3rem;
  }

  ${DEVICE.lg} {
    a {
      background-color: ${({ theme }) => theme.COLORS.PINK_300};
      border-radius: 999rem;
      width: 5.6rem;
      height: 5.6rem;
      display: flex;
      justify-content: center;
      transition: all 0.2s;
    }

    a:hover {
      background-color: ${({ theme }) => theme.COLORS.PINK_200};
      transform: scale(1.1);
    }
  }
`
