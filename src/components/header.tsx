import Image from "next/image";
import headshot from "@/public/headshot.jpg";
import { CONTACTS } from "@/data/contacts";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center bg-stone-800 items-center h-[60vh] py-10">
      <Image
        src={headshot}
        alt="headshot"
        className="object-cover rounded-full w-1/6 aspect-square mx-10"
      />
      <div className="flex flex-col items-start w-1/2">
        <p className="text-8xl text-white font-bold">Quin Gill</p>

        <p className="my-5 text-xl text-white text-start">
          Quin is currently a 4th year Computer Science major at the University
          of California, Riverside. Quin leads web based projects for ACM Spark
          and is working towards being a Sowfware and Game developer.
        </p>
        <div className="flex justify-start space-x-10 text-white text-3xl w-full">
          {CONTACTS.map(({ title, link, icon }, index) => (
            <div key={index}>
              <Link href={link} target="_blank">
                {icon}
              </Link>
              <p className="hidden">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
