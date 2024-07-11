import { contacts } from "../data/projectData";
interface ContactsCardProps {
  className: string;
}
export const ContactsCard = ({ className }: ContactsCardProps) => {
  return (
    <div className={className}>
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="shadow-custom flex items-center justify-center p-4 mb-4 bg-gray-700 rounded-lg transition-transform transform hover:scale-105"
        >
          <a
            className="flex items-center gap-3 text-xl text-gray-300 hover:text-white transition-colors duration-300"
            href={`${contact.link}`}
          >
            <span className={`${contact.iconId}`}></span>
            {contact.text}
          </a>
        </div>
      ))}
    </div>
  );
};
