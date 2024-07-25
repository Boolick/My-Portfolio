import Link from "./Link";

export const Header = (): JSX.Element => {
  return (
    <header className="w-full max-h-1/16 max-w-7xl m-auto rounded-full mb-5">
      <div className="w-full flex justify-between gap-2 pl-5 pr-5">
        <Link text="</>" to="/" className="text-2xl" isCoarse></Link>
        <Link text="About" to="/about" className="text-2xl" isCoarse></Link>
        <Link
          text="Portfolio"
          to="/portfolio"
          className="text-2xl"
          isCoarse
        ></Link>
        <Link
          text="Contact Me"
          to="/contacts"
          className="text-2xl"
          isCoarse
        ></Link>
      </div>
    </header>
  );
};
