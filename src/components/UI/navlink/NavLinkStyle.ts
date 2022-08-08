import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinkStyles = styled(Link)`
  color: #002766;
  font-size: 18px;
  font-weight: 400;
  &:hover,
  &:active {
    color: lightgrey;
  }
`;

export default NavLinkStyles;
