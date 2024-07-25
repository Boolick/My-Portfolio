import { useEffect, useState } from "react";
import { contacts } from "../data/projectData";
import AutoText from "./AutoText";
import Link from "./Link";

interface ContactsCardProps {
  className: string;
}
export const ContactsCard = ({ className }: ContactsCardProps) => {
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

  return (
    <>
      <AutoText text={"Connect with me"} speed={100}></AutoText>
      <section className={`main ${className}`}>
        {contacts.map((contact, index) => (
          <div
            key={index}
            className={`shadow-custom flex-container items-center justify-center p-4 mb-4 bg-gray-700 rounded-lg ${
              !isCoarse ? "transition-transform transform hover:scale-105" : ""
            }`}
          >
            <Link
              to={contact.link}
              text={contact.text}
              isCoarse={isCoarse}
              className="flex items-center sm:text-base gap-3 text-xl text-gray-300"
            ><span className={`${contact.iconId}`}></span></Link>
          </div>
        ))}
      </section>
    </>
  );
};
``;
