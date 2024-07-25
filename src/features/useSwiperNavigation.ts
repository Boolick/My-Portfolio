import { useLocation, useNavigate } from "react-router-dom";

export const useSwiperNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSwipe = (direction: "Left" | "Right") => {
    if (direction === "Right") {
      // Navigate to the next page
      if (location.pathname === "/") {
        navigate("/about");
      } else if (location.pathname === "/about") {
        navigate("/portfolio");
      } else if (location.pathname === "/portfolio") {
        navigate("/contacts");
      } else {
        navigate("/");
      }
    } else if (direction === "Left") {
      // Navigate to the previous page
      if (location.pathname === "/about") {
        navigate("/");
      } else if (location.pathname === "/portfolio") {
        navigate("/about");
      } else if (location.pathname === "/contacts") {
        navigate("/portfolio");
      } else {
        navigate("/contacts");
      }
    }
  };
  return handleSwipe;
};
