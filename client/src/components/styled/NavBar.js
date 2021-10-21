import styled from "styled-components";
import { Link } from "react-router-dom";
import AdminTheme from "../../themes/AdminTheme";

const NavbarWrapper = styled.div`
  height: 80px;
`;

const NavbarMenu = styled.nav`
  display: flex;
  align-content: baseline;
  list-style-type: none;
  background: ${(props) => props.theme.palette.brand};
`;

const NavbarLogo = styled.ul`
  text-align: center;
  padding: 16px;
  color: white;
  font-size: 1.5em;
  &:hover {
    background-color: #3165db;
  }
`;

const NavbarItem = styled.ul`
  text-align: center;
  padding: 16px;
  color: white;
  font-size: 1em;
  &:hover {
    background-color: #3165db;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarMenu theme={AdminTheme}>
        <NavbarLogo>
          <Link to="/">WeeDo</Link>
        </NavbarLogo>

        <NavbarItem>
          <Link to="/searchpatientpage">Sök patient</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/registerpatientpage">Registrera patient</Link>
        </NavbarItem>
        <NavbarItem>
          {" "}
          <p>Ladda upp övning</p>
        </NavbarItem>
        <NavbarItem>
          {" "}
          <p>Sök övning</p>
        </NavbarItem>
      </NavbarMenu>
    </NavbarWrapper>
  );
};

export default Navbar;
