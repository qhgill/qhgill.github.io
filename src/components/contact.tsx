import Title from "@/components/title";
import { CONTACTS } from "@/data/contacts";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white text-black">
      <Title title="Contact" />
      <div className="flex justify-evenly my-10 w-full">
        {CONTACTS.map(({ title, link, icon }, index) => (
          <Link
            className="flex flex-col items-center text-2xl"
            key={index}
            href={link}
            target="_blank"
          >
            <div className="text-4xl"> {icon}</div>
            <p>{title}</p>
          </Link>
        ))}
      </div>
      <p className="">© Quin Gill</p>
      <p className="pb-16">Last Updated: September 2025</p>
    </div>
  );
};

export default Contact;
