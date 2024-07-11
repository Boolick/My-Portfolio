import AutoText from "./AutoText";

interface AboutMeProps {
  className: string;
}
export const AboutMe = ({ className }: AboutMeProps) => {
  return (
    <main className={className}>
      <AutoText text={"About Me"} speed={100}></AutoText>
      <div className="shadow-custom flex flex-row items-center p-4 gap-10 max-w-4xl bg-gray-800 border border-gray-600 rounded-3xl">
        <img className="w-52 h-52" src="assets/profile-pic (5).png" />
        <p className="text-justify">
          <strong>Skilled engineer</strong> with a background in technology and
          a newfound passion for web development. Proven skills in optimizing
          processes, quality control, and <strong>effective</strong>{" "}
          communication. Transitioned into a web developer role, eager to
          contribute my diverse skills to the world of frontend{" "}
          <strong>development</strong>.
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
