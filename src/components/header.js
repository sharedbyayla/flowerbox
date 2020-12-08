import styled from 'styled-components'
import { Nav } from './Nav'
import banner from '../images/banner.png'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav />
      <img src={banner} alt='flowerbox' />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`

`
