import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

import PatientTheme from "../../themes/PatientTheme";
import WdLogo from "../images/WdLogo";

import Icon from "../common/Icons";
import { customDialogPatient } from "../common/Confirmation";

import { getSession } from "../../api";

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
`;

const PatientName = styled.div`
  display: flex;
  align-items: center;
  color: white;
  height: 100%;
  font-size: 1em;
  margin-left: auto;
  @media (max-width: 768px) {
    display: flex;
    justify-content: right;
    margin-right: 10px;
    font-size: 1.2em;
  }

  @media (max-width: 410px) {
    margin-right: 2%;
  }
`;

const NavbarItemLogout = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
  height: 100%;
  font-size: 1em;
  ${(p) => p.last && `margin-left: 10px`};
  &:hover,
  &.active {
    background-color: ${(props) => props.theme.palette.hover};
  }
  @media (max-width: 768px) {
    display: none;
  }
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
  background-color: ${(props) => props.theme.palette.hamburger};
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
    margin-left: 70px;
  }
  @media (max-width: 410px) {
    margin: 0;
    padding: 0;
  }
`;

const StyledDivider = styled.hr`
  align-content: center;
  width: 90%;
  margin: 0 auto;
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.hamburger};
`;

const Navbar = () => {
  /* === PATIENT SESSION === */
  const [patient, setPatient] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const fetchedPatientSession = await getSession();
      setPatient(fetchedPatientSession.data);
    };
    fetchData();
  }, []);

  /* === NAVBAR ===*/
  const closeMenu = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const url = "http://localhost:3000/activitypanel";

  if (window.location.href !== url) {
    return (
      <>
        <NavbarMenu theme={PatientTheme}>
          <NavbarBurger>
            <Hamburger toggled={open} toggle={setOpen} rounded color="white" />
          </NavbarBurger>

          <NavbarLogo to="/activitypanel">
            <WdLogo width="4em" height="4em" fill="#FFFFFF" alt="WeeDo Logo" />
          </NavbarLogo>
          <NavbarItem to="/todo">Mina övningar</NavbarItem>
          <NavbarItem to="/statistics">Se statistik</NavbarItem>
          <PatientName>{patient.name}</PatientName>

          <NavbarItemLogout
            isActive={() => false}
            onClick={customDialogPatient}
            last="true"
          >
            Logga ut
          </NavbarItemLogout>
        </NavbarMenu>

        <StyledMobileNav open={open}>
          <NavbarItemBurger to="/todo" onClick={closeMenu}>
            <StyledIcon size="1.5em" name="gym_user" /> Mina övningar
          </NavbarItemBurger>
          <StyledDivider />

          <NavbarItemBurger to="/statistics" onClick={closeMenu}>
            <StyledIcon size="1.5em" name="statistics" /> Se statistik
          </NavbarItemBurger>
          <StyledDivider />
          <NavbarItemBurger to="/help" onClick={closeMenu}>
            Hjälp
          </NavbarItemBurger>
          <StyledDivider />

          <NavbarItemBurger to="/about" onClick={closeMenu}>
            Om WeeDo
          </NavbarItemBurger>

          <LogOut to="/" isActive={() => false} onClick={customDialogPatient}>
            Logga ut
          </LogOut>
        </StyledMobileNav>
      </>
    );
  }
  if (window.location.href === url) {
    return (
      <>
        <NavbarMenu theme={PatientTheme}>
          <NavbarBurger>
            <Hamburger toggled={open} toggle={setOpen} rounded color="white" />
          </NavbarBurger>

          <NavbarLogo to="/activitypanel">
            <WdLogo width="4em" height="4em" fill="#FFFFFF" alt="WeeDo Logo" />
          </NavbarLogo>

          <PatientName>{patient.name}</PatientName>

          <NavbarItemLogout
            isActive={() => false}
            onClick={customDialogPatient}
            last="true"
          >
            Logga ut
          </NavbarItemLogout>
        </NavbarMenu>

        <StyledMobileNav open={open}>
          <StyledDivider />
          <NavbarItemBurger to="/help" onClick={closeMenu}>
            Hjälp
          </NavbarItemBurger>
          <LogOut to="/" isActive={() => false} onClick={customDialogPatient}>
            Logga ut
          </LogOut>
        </StyledMobileNav>
      </>
    );
  }
};

export default Navbar;
