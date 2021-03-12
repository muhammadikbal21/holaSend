import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElement';
// import {IconContext} from 'react-icons/lib';
// import {animateScroll as scroll} from 'react-scroll';
const NavBar = ({toggle}) => {
  const [scrollNav, setSrcollNav] = useState(false);
  const changeNav = () => {
    return window.scrollY >= 80 ? setSrcollNav(true) : setSrcollNav(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {};

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            hola<span style={{color: '#152C5B'}}>Send!</span>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                offset={-80}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                offset={-80}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Services
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
