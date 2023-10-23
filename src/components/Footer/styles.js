import styled from 'styled-components'

export const Container = styled.footer`
  p {
    padding-inline: 2rem;
    padding-bottom: 3rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`
