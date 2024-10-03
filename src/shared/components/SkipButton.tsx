import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";
interface SkipButtonProps {
  onClick: () => void;
}
export const SkipButton = ({ onClick }: SkipButtonProps) => {
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    setIsCoarse(mediaQuery.matches);

    const handleChange = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => setIsCoarse(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  const { t } = useTranslation();

  return (
    <div className="relative">
      {!isCoarse && (
        <Button
          text={t("nextButton")}
          onClick={onClick}
          className={`transition-opacity duration-300 opacity-20 fixed bottom-10 right-4 hover:opacity-100`}
        />
      )}
    </div>
  );
};

export default SkipButton;
