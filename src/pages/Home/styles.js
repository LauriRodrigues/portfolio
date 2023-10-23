import styled from 'styled-components'
import { DEVICE } from '../../styles/brakepoints'

export const Container = styled.div`
  min-height: calc(100vh - 16.2rem);
  display: flex;

  main {
    width: 100%;
    max-width: 140rem;
    margin-inline: auto;
    margin-block: auto;
    height: 100%;
    padding: 3.5rem 2rem;

    .boxImage {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      max-width: 55rem;
      height: 29rem;
      margin-inline: auto;
      background-color: ${({ theme }) => theme.COLORS.PINK_100_BOX};
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 5rem;
      position: relative;

      img {
        height: 100%;
      }

      .textBox {
        position: absolute;
        top: 29rem;

        h1 {
          font-family: Tourney;
          font-size: 5.6rem;
          font-weight: 400;
          margin-top: 2rem;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        }

        p {
          font-family: Fira Code;
          font-size: 2.1rem;
          font-weight: 400;
          margin-top: 1rem;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

          span {
            color: ${({ theme }) => theme.COLORS.PINK_200};
          }
        }
      }
    }
  }

  ${DEVICE.lg} {
    main {
      padding: 3.5rem 6rem;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      gap: 5rem;

      .boxImage {
        position: initial;
        width: 100%;
        max-width: 100rem;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0;

        .textBox {
          position: initial;

          h1 {
            margin-top: 0;
          }
        }
      }
    }
  }
`
