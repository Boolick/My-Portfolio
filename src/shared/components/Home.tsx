import { Button } from "./Button";

interface HeaderProps {
  className?: string;
}

export const Home = ({ className }: HeaderProps): React.JSX.Element => {
  return (
    <div className={`main ${className}`}>
      <div className="info">
        <h1>
          Hello, I'm Alex, <br />
          Web Developer
        </h1>
        <p>
        I craft dynamic and imaginative web solutions that delight users.
        </p>
        <Button text={"Download Resume"} />
      </div>
      <img className="w-80 h-80" src="assets/profile-pic (1).png" alt="Avatar photo" />
    </div>
  );
};
