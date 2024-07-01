import { NavLink } from "react-router-dom";

interface LinkProps {
  to: string;
  text: string;
  className?: string;
}

function Link({ to, text, className }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `no-underline cursor-pointer underline-animation ${isActive ? 'text-green-600 underline-active font-bold' : 'hover:text-green-600'} ${className}`
      }
    >
      {text}
    </NavLink>
  );
}

export default Link;
