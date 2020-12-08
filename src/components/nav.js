import styled from 'styled-components'
import logo from '../images/logo.png'
import cartIcon from '../images/shopping-cart.svg'

export const Nav = () => {
  return (
    <NavWrapper>
      <Brand>
        <LogoWrapper>
          <img src={logo} alt='logo' />
        </LogoWrapper>
        <SiteTitle>
          flowerbox
        </SiteTitle>
      </Brand>

      <CartIconWrapper>
        <img src={cartIcon} alt='shopping cart' />
      </CartIconWrapper>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.softWhite};
  height: ${props => props.theme.sizes.xLarge};
  margin-bottom: ${props => props.theme.sizes.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.sizes.small};
`

const Brand = styled.div`
  display: flex;
`

const LogoWrapper = styled.div`
  width: ${props => props.theme.sizes.medium};
`

const SiteTitle = styled.h1`#
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.sizes.small};
  margin-left: ${props => props.theme.sizes.small};
`

const CartIconWrapper = styled.div`
  
`
