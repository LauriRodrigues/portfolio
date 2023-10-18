import styled from 'styled-components'
import { DEVICE } from '../../styles/brakepoints'

export const Container = styled.div`
  min-height: calc(100vh - 16.2rem);

  main {
    max-width: 140rem;
    margin-inline: auto;
    height: 100%;
    padding: 3.5rem 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

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

    .links {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 24rem;

      a img {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
      }
    }
  }

  ${DEVICE.lg} {
    display: flex;
    width: 100%;

    main {
      width: 100%;
      padding: 3.5rem 6rem;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      margin-block: auto;
      gap: 5rem;

      .links {
        flex-direction: column;
        margin-top: 0;

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
        }
      }

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
