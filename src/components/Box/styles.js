import styled from 'styled-components'
import { DEVICE } from '../../styles/brakepoints'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 55rem;
  padding: 3rem 4rem;
  margin-inline: auto;
  margin-block: 3.7rem;
  background-color: ${({ theme }) => theme.COLORS.PINK_100_BOX};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5rem;
  text-align: center;
  
  a {
    text-decoration: underline;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  &.onlyImage {
    padding: 0;
    display: visible;

    h1,
    p {
      display: none;
    }
  }

  &.imageWithText {
    img {
      display: none;
    }
  }

  h1 {
    font-family: Tourney;
    font-size: 3.8rem;
    font-weight: 400;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 2.5rem;
  }

  p {
    font-family: Fira Code;
    font-size: 1.7rem;
    font-weight: 400;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  ${DEVICE.lg} {
    max-width: 100rem;
    margin-block: 10rem;

    &.onlyImage {
      display: none;
    }

    &.imageWithText {
      position: relative;
      align-items: flex-start;
      padding: 6.5rem 4rem;

      h1,
      p {
        width: 68%;
      }

      img {
        display: flex;
        position: absolute;
        right: 5%;
      }
    }
  }
`
