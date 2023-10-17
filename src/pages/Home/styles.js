import styled from 'styled-components'

export const Container = styled.div`
  main {
    flex-grow: 1;
    padding: 3.5rem 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    .box {
      width: 100%;
      height: 29rem;
      background-color: ${({ theme }) => theme.COLORS.PINK_100_BOX};
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 5rem;
    }

    .boxImage {
      display: flex;
      justify-content: center;
    }

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

    .links {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 6rem;
    }
  }
`
