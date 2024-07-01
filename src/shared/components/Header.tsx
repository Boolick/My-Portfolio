import Link from "./Link";

export const Header = (): JSX.Element => {
  return (
    <header className="w-full h-1/16">
      <div className="w-full flex justify-between gap-2 pl-20 pr-20">
        <Link text="</>" to="/" className="text-2xl"></Link>
        <Link text="About" to="/about" className="text-2xl"></Link>
        <Link
          text="Portfolio"
          to="/portfolio"
          className="text-2xl"
        ></Link>
        <Link
          text="Contact Me"
          to="/contacts"
          className="text-2xl"
        ></Link>
      </div>
    </header>
  );
};
