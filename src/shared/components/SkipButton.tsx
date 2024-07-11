import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const SkipButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/") {
      navigate("/about");
    } else if (location.pathname === "/about") {
      navigate("/portfolio");
    } else if (location.pathname === "/portfolio") {
      navigate("/contacts");
    } else {
      navigate("/");
    }
  };
  return (
    <Button
      text={`Next >>`}
      onClick={handleClick}
      className="transition-opacity duration-300 opacity-10 fixed bottom-10 right-0 hover:opacity-100"
    />
  );
};

export default SkipButton;
