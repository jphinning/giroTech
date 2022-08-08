import { Header } from "antd/lib/layout/layout";
import styled from "styled-components";

const NavbarStyles = styled(Header)`
  background-color: white;
  display: flex;
  justify-content: center;
  column-gap: 24px;
  background-image: url(imgs/giroTech.svg);
  background-repeat: no-repeat;
  background-position: 55% 50%;
  background-size: 75px;
`;

export default NavbarStyles;
