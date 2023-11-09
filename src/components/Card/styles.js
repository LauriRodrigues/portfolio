import styled from 'styled-components'

export const Container = styled.div`
  width: 25.6rem;
  height: 39rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  border-radius: 13px;

  .projectImage {
    width: 25.6rem;
    height: 15rem;
    border-radius: 13px 13px 0 0;
  }

  .cardContent {
    width: 100%;
    height: 24rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    padding: 2rem;
    font-family: Fira Code;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    .cardText {
      line-height: 1.7rem;

      h2 {
        font-size: 1.7rem;
        font-weight: 500;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.4rem;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        text-align: left;
      }
    }

    .cardIcons {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      img {
        width: 3rem;
        height: 3rem;
      }
    }

    .cardLinks {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      width: 100%;
      justify-content: center;
      align-items: baseline;

      .cardLink {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        img {
          width: 1.3rem;
          height: 1.3rem;
        }

        a {
          font-size: 1rem;
          font-weight: 400;
          text-decoration: underline;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
    }
  }
`
