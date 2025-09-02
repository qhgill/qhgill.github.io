import Title from "@/components/title";
import { CONTACTS } from "@/data/contacts";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Title title="Contact" />
      <div className="flex justify-evenly my-10 w-full">
        {CONTACTS.map(({ title, link, icon }, index) => (
          <Link
            className="flex flex-col items-center text-2xl"
            key={index}
            href={link}
          >
            <div className="text-4xl"> {icon}</div>
            <p>{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;
