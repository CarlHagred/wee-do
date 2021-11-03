import { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import AdminTheme from "../../themes/AdminTheme";
import Hamburger from "hamburger-react";
import Icon from "../common/Icons";
import { customDialogAdmin } from "../common/Confirmation";

// Hamburgermenyn använder sig av en animerad ikon
// från https://hamburger-react.netlify.app/

// Kod nedan behöver städas lite, inte klar med det ännu //Josefine

const StyledIcon = styled(Icon)`
  margin-right: 10px;
`;

const StyledMobileNav = styled.div`
  display: none;
  background: ${(props) => props.theme.palette.brand};
  max-height: ${(p) => (p.open ? "500px" : 0)};
  overflow: hidden;
  transition: 250ms max-height ease-in-out;
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavbarMenu = styled.nav`
  display: flex;
  height: 70px;
  list-style-type: none;
  background: ${(props) => props.theme.palette.brand};
`;

const NavbarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
  height: 100%;
  font-size: 1em;
  &:hover,
  &.active {
    background-color: ${(props) => props.theme.palette.hover};
  }
  @media (max-width: 768px) {
    display: none;
  }
  ${(p) => p.last && `margin-left: auto`}
`;

const NavbarItemLogout = styled(NavbarItem)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
  height: 100%;
  font-size: 1em;
  &:hover,
  &.active {
    background-color: ${(props) => props.theme.palette.hover};
  }
  @media (max-width: 768px) {
    display: none;
  }
  ${(p) => p.last && `margin-left: auto`}
`;

const NavbarItemBurger = styled(NavLink)`
  display: flex;
  padding: 20px;
  align-items: center;
  color: white;
  height: 100%;
  font-size: 1.2em;
  &:hover,
  &.active {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

const NavBarItemBurgerLogout = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  color: white;
  height: 100%;
  font-size: 1.2em;
  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

const LogOut = styled(NavBarItemBurgerLogout)`
  justify-content: center;
  font-size: 1.3em;
  background: #6c98ff;
`;

const NavbarBurger = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    padding: 0 20px;
  }
`;

const NavbarLogo = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
  height: 100%;
  font-size: 1.8em;
  @media (max-width: 768px) {
    display: flex;
    align-self: center;
    flex: 1;
    justify-content: center;
    padding: 0 70px 0 0;
  }
`;

const StyledDivider = styled.hr`
  align-content: center;
  width: 90%;
  margin: 0 auto;
  border: 1px solid #6c98ff; ;
`;

const Navbar = () => {
  const closeMenu = () => setOpen(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavbarMenu theme={AdminTheme}>
        <NavbarBurger>
          <Hamburger toggled={open} toggle={setOpen} rounded color="white" />
        </NavbarBurger>

        <NavbarLogo to="/adminpanel/">WeeDo</NavbarLogo>
        <NavbarItem to="/admin/register/patient">Registrera Patient</NavbarItem>
        <NavbarItem to="/admin/search/patient">Sök Patient</NavbarItem>
        <NavbarItem to="/admin/register/exercise">Ladda upp övning</NavbarItem>
        <NavbarItem to="/admin/search/exercise">Sök övning</NavbarItem>
        <NavbarItemLogout
          to="/"
          isActive={() => false}
          onClick={customDialogAdmin}
          last="true"
        >
          Logga ut
        </NavbarItemLogout>
      </NavbarMenu>

      <StyledMobileNav open={open}>
        <NavbarItemBurger to="/admin/register/patient" onClick={closeMenu}>
          <StyledIcon size="1.5em" name="add_user" /> Registrera Patient
        </NavbarItemBurger>
        <StyledDivider />

        <NavbarItemBurger to="/admin/search/patient" onClick={closeMenu}>
          <StyledIcon size="1.5em" name="search" /> Sök Patient
        </NavbarItemBurger>
        <StyledDivider />
        <NavbarItemBurger to="/admin/register/exercise" onClick={closeMenu}>
          <StyledIcon size="1.5em" name="upload" /> Ladda upp övning
        </NavbarItemBurger>
        <StyledDivider />

        <NavbarItemBurger to="/admin/search/exercise" onClick={closeMenu}>
          <StyledIcon size="1.5em" name="search" /> Sök övning
        </NavbarItemBurger>

        <LogOut to="/" isActive={() => false} onClick={customDialogAdmin}>
          Logga ut
        </LogOut>
      </StyledMobileNav>
    </>
  );
};

export default Navbar;
