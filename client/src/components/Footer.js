import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RS_Logo from "../images/rs_webb.jpg";

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #9a9a9a;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  padding: 15px;
`;

const Footer = () => {
  return (
    <div className="Footer">
      <StyledFooter>
        <Row>
          <Col size={1}>
            <img src={RS_Logo} alt="Region Skånes logotyp" />
          </Col>
        </Row>

        <Row>
          <Col size={1}></Col>
          <Col size={1}>
            <Link to="/help">Hjälp</Link>
          </Col>
          <Col size={1}>
            <Link to="/about">Om WeeDo</Link>
          </Col>
        </Row>
      </StyledFooter>
    </div>
  );
};

export default Footer;
