import { contacts } from "../data/projectData";
interface ContactsCardProps {
  className: string;
}
export const ContactsCard = ({ className }: ContactsCardProps) => {
  return (
    <div className={className}>
      {contacts.map((contact, index) => (
        <div key={index} className="flex">
          <a
            className={`${contact.iconId} scale-125 flex items-center gap-2 text-2xl text-gray-400`}
            href={`${contact.link}`}
          >
            {contact.text}
          </a>
        </div>
      ))}
    </div>
  );
};
