import { Button } from "./Button";

interface HeaderProps {
  className?: string;
}

export const Home = ({ className }: HeaderProps): React.JSX.Element => {
  return (
    <main className={`main ${className}`}>
      <div className="info">
        <h1>
          Hello, I'm Alex, <br />
          Frontend Developer
        </h1>
        <p>I craft dynamic and imaginative web solutions that delight users.</p>
        <Button text={"Download Resume"} />
      </div>
      <div className="max-w-80 max-h-80 border-8 border-gray-700 rounded-full">
        <img src="assets/profile-pic (1).png" alt="Avatar photo" />
      </div>
    </main>
  );
};
