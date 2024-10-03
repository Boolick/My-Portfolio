import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex justify-start  xsm:top-4 md:relative max-h-1/16 max-w-7xl m-auto px-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={i18n.language === "ru"}
          onChange={toggleLanguage}
          className="sr-only peer"
        />
        <div className="w-20 h-7 rounded-full bg-gray-900 border-2 border-blue-900 duration-100 after:duration-500 peer-focus:outline-none  after:content-['EN'] after:absolute after:outline-none after:h-5 after:w-10 after:rounded-full after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center after:text-blue-600 after:font-bold peer-checked:after:translate-x-8 peer-checked:after:content-['RU'] peer-checked:after:text-blue-900"></div>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
