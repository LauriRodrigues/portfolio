import styled from 'styled-components'
import { DEVICE } from '../../styles/brakepoints'

export const Container = styled.header`
  width: 100%;

  .header {
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 2rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  #navIcon {
    width: 3rem;
    height: 3rem;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  #navIcon span {
    display: block;
    position: absolute;
    height: 0.3rem;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
    border-radius: 0.9rem;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #navIcon span:nth-child(1) {
    top: 0px;
  }

  #navIcon span:nth-child(2),
  #navIcon span:nth-child(3) {
    top: 1rem;
  }

  #navIcon span:nth-child(4) {
    top: 2rem;
  }

  #navIcon.open span:nth-child(1) {
    top: 1.8rem;
    width: 0%;
    left: 50%;
  }

  #navIcon.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #navIcon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #navIcon.open span:nth-child(4) {
    top: 1.8rem;
    width: 0%;
    left: 50%;
  }

  .menu {
    z-index: ${(props) => (props.isOpen ? '1000000' : '-1')};
    width: 100%;
    padding-top: 3rem;
    background-color: ${({ theme }) => theme.COLORS.BLUE_300};
    position: absolute;
    text-align: center;
    height: calc(100vh - 10rem);
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    transition: opacity 0.4s ease;
  }

  .menu ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .menu ul li {
    font-family: 'Fira Code', monospace;
    font-size: 1.8rem;
    font-weight: 600;
  }

  .menu ul li a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  }

  .menu ul li a span {
    color: ${({ theme }) => theme.COLORS.PINK_200};
  }

  ${DEVICE.lg} {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3rem 6rem;

    .header,
    .menu {
      padding: initial;
    }

    button {
      display: none;
    }

    .menu {
      z-index: 1;
      position: static;
      height: fit-content;
      opacity: 1;
      display: flex;
      justify-content: flex-end;
    }

    .menu ul {
      flex-direction: row;
      gap: 1.5rem;
    }

    .menu ul li a {
      font-size: 2rem;
      font-weight: 300;
      padding: 0.6rem 1.3rem;
      transition: all 0.2s;
      border-radius: 0.8rem;
    }

    .menu ul li a:hover {
      font-weight: 600;
      background: ${({ theme }) => theme.COLORS.BLUE_400};
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.6));
      cursor: pointer;
    }

    .menu ul li a.active {
      font-weight: 600;
      background: ${({ theme }) => theme.COLORS.BLUE_400};
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.6) inset;
      cursor: pointer;
    }

    .menu ul li a span {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .menu ul li:hover > a span,
    .menu ul li a.active span {
      color: ${({ theme }) => theme.COLORS.PINK_200};
    }
  }
`
