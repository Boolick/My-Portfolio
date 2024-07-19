import AutoText from "./AutoText";
import { Button } from "./Button";

interface HeaderProps {
  className?: string;
}

export const Home = ({ className }: HeaderProps): React.JSX.Element => {
  return (
    <section
      className={`main ${className} p-4 sm:text-base md:text-lg lg:text-xl`}
    >
      <div className="info">
        <AutoText text={`Hello, I'm Alex, \n Frontend Developer`} speed={50} />
        <p>I craft dynamic and imaginative web solutions that delight users.</p>
        <Button text={"Download Resume"} />
      </div>
      <div className=" max-w-80 max-h-80 shadow-custom rounded-full md:max-w-50">
        <img src="assets/profile-pic (1).png" alt="Avatar photo" />
      </div>
    </section>
  );
};
