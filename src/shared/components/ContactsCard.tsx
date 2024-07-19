import { contacts } from "../data/projectData";
import AutoText from "./AutoText";

interface ContactsCardProps {
  className: string;
}
export const ContactsCard = ({ className }: ContactsCardProps) => {
  return (
    <>
      <AutoText text={"Connect with me"} speed={100}></AutoText>
      <section className={`main ${className}`}>
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="shadow-custom flex-container items-center justify-center p-4 mb-4 bg-gray-700 rounded-lg transition-transform transform hover:scale-105"
          >
            <a
              className="flex items-center sm:text-base gap-3 text-xl text-gray-300 hover:text-white transition-colors duration-300"
              href={`${contact.link}`}
            >
              <span className={`${contact.iconId}`}></span>
              {contact.text}
            </a>
          </div>
        ))}
      </section>
    </>
  );
};
``;
