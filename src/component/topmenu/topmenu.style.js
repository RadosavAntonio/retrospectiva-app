import styled from 'styled-components'
import { Link } from '@reach/router'


export const TheLink = styled(Link)`
  color: #fff;
`

export const Nav = styled.nav`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr auto auto 1fr ;
  background-color: #000;
`