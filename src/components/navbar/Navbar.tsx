import { useTranslation } from "react-i18next";
import NavLink from "../UI/navlink/NavLink";
import NavbarStyles from "./NavBarStyle";

function Navbar() {
  const { t } = useTranslation();

  return (
    <NavbarStyles>
      <NavLink path="/">{t("GiroTech.title")}</NavLink>
    </NavbarStyles>
  );
}

export default Navbar;
