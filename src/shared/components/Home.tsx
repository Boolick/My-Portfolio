import AutoText from "./AutoText";
import { Button } from "./Button";

interface HeaderProps {
  className?: string;
}

export const Home = ({ className }: HeaderProps): React.JSX.Element => {
  return (
    <section
      className={`main flex flex-col sm:flex-row items-center justify-between ${className} p-4 sm:text-base md:text-lg lg:text-xl transition-all duration-500 ease-in-out`}
    >
      <div className="info flex-1 text-center md:text-left">
        <AutoText text={`Hello, I'm Alex, \n Frontend Developer`} speed={50} />
        <p>I craft dynamic and imaginative web solutions that delight users.</p>
        <Button text={"Download Resume"} />
      </div>
      <div className="flex-1 mt-6 md:mt-0 max-w-xs sm:max-w-xs md:max-w-md lg:max-w-xs shadow-custom rounded-full overflow-hidden">
        <img
          src="assets/profile-pic (1).png"
          alt="Avatar photo"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
