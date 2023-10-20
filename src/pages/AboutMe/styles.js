import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  margin-inline: auto;
  margin-block: auto;
  height: 100%;
  padding: 3.5rem 2rem;

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin: 5rem auto 2rem;

    a img {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
    }
  }
`
