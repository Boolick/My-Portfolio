interface AboutMeProps {
  className: string;
}
export const AboutMe = ({ className }: AboutMeProps) => {
  return (
    <main className={className}>
      <h1>About Me</h1>
      <div className="flex flex-row items-center p-4 gap-10 bg-gray-800 border border-gray-600 rounded-3xl">
        <img className="w-52 h-52" src="assets/profile-pic (5).png" />
        <p>
          Skilled engineer with a background in technology and a newfound
          passion for web development. Proven skills in optimizing processes,
          quality control, and effective communication. Transitioned into a web
          developer role, eager to contribute my diverse skills to the world of
          frontend development.
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
