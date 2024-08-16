import Link from "./Link";

enum NavLinkText {
  HOME_ICON = "</>",
  HOME = "Home",
  ABOUT = "About",
  PORTFOLIO = "Portfolio",
  CONTACT = "Contact Me",
}

interface NavLinksProps {
  linkText: NavLinkText;
  to: string;
}
const NavLinks = () => {
  const links: NavLinksProps[] = [
    { linkText: NavLinkText.HOME, to: "/" },
    { linkText: NavLinkText.ABOUT, to: "/about" },
    { linkText: NavLinkText.PORTFOLIO, to: "/portfolio" },
    { linkText: NavLinkText.CONTACT, to: "/contacts" },
  ];

  return (
    <>
      {links.map(({ linkText, to }) => (
        <Link key={to} text={linkText} to={to} className="text-2xl" isCoarse />
      ))}
    </>
  );
};

export default NavLinks;
