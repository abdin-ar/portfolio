import { NavLink } from "react-router-dom";
import DarkModeToggleSaved from "./DarkModeToggleSaved";
import NavbarComponent from "./Navbar/NavbarComponent";
import navLinks from "../../data/navLinks";
import Logo from "../../components/common/Logo";
import MyLink from "../router/MyLink";

const Navbar = () => {
  return (
    <NavbarComponent
      classNav={"bg-grey bg-95 bg-opacity-60 bg-blur-4 py-1"}
      logo={
        <MyLink to="/" type="NavLink" className="nav-logo-rem my-logo-link">
          <Logo className="img my-logo" />
        </MyLink>
      }
      links={navLinks}
      classLink="bg-transparent h-bg-transparent txt-grey txt-5 h-txt-primary h-txt-60 dm-h-txt-primary dm-h-txt-40 text-shadow-2"
      cta={
        <MyLink
          to="/#contact"
          type="NavLink"
          className="btn spacing-l bg-primary bg-50 h-bg-primary h-bg-30 txt-grey txt-90 h-txt-grey h-txt-90 dm-h-bg-primary dm-h-bg-70 dm-txt-grey dm-txt-10 dm-h-txt-grey dm-h-txt-10 pill"
        >
          Hire Me
        </MyLink>
      }
      toggle={<i className="fas fa-bars"></i>}
      classToggle="btn spacing-l bg-transparent h-bg-transparent txt-grey txt-5 h-txt-primary h-txt-60 dm-h-txt-primary dm-h-txt-40 text-shadow-2"
      toggleSize={"md"}
    >
      <DarkModeToggleSaved
        className="nav-toggle-darkmode btn spacing-l bg-transparent h-bg-transparent txt-grey txt-5 h-txt-primary h-txt-60 dm-h-txt-primary dm-h-txt-40 text-shadow-2"
        aria-label="Toggle dark mode"
      />
    </NavbarComponent>
  );
};

export default Navbar;
