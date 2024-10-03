import { LanguageSwitcher } from "../../features";
import NavLinks from "./NavLinks";
import BurgerMenu from "./NavMenu";

export const Header = (): JSX.Element => {
  return (
    <>
      <header className="w-full max-h-1/16 max-w-7xl m-auto rounded-full mb-2">
        <nav className="w-full hidden md:flex justify-between gap-2 pl-5 pr-5">
          <NavLinks />
        </nav>
        <div className="w-full">
          <LanguageSwitcher />
          <BurgerMenu />
        </div>
      </header>
    </>
  );
};
