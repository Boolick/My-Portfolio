import { useTranslation } from "react-i18next";
import AutoText from "./AutoText";

interface AboutMeProps {
  className: string;
}
export const AboutMe = ({ className }: AboutMeProps) => {
  const { t } = useTranslation();
  return (
    <section
      className={`main ${className} p-4 sm:text-base md:text-lg lg:text-xl`}
    >
      <AutoText text={t("about.title")} speed={100}></AutoText>
      <div className="flex flex-col md:flex-row items-center p-4 gap-10 sm:max-w-4xl transition-flexDirection transform bg-gray-800 border border-gray-600 rounded-3xl xsm:max-w-screen-xsm">
        <img
          className="md:max-w-52 xsm:max-w-32"
          src="assets/profile-pic (5).png"
        />
        <p className="text-justify">{t("about.description")}</p>
      </div>
    </section>
  );
};

export default AboutMe;
