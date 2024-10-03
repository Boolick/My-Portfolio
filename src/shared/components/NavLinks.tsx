import { useTranslationContext } from "../../app/providers/TranslationContext";
import Link from "./Link";

const NavLinkText = {
  HOME: "nav.home",
  ABOUT: "nav.about",
  PORTFOLIO: "nav.portfolio",
  CONTACT: "nav.contact",
};

interface NavLinksProps {
  linkText: string;
  to: string;
}
const NavLinks = () => {
  const links: NavLinksProps[] = [
    { linkText: NavLinkText.HOME, to: "/" },
    { linkText: NavLinkText.ABOUT, to: "/about" },
    { linkText: NavLinkText.PORTFOLIO, to: "/portfolio" },
    { linkText: NavLinkText.CONTACT, to: "/contacts" },
  ];

  const { t } = useTranslationContext();

  return (
    <>
      {links.map(({ linkText, to }) => (
        <Link
          key={to}
          text={t(linkText)}
          to={to}
          className="text-2xl"
          isCoarse
        />
      ))}
    </>
  );
};

export default NavLinks;
