import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

export interface ProjectProps {
  title: string;
  role: string;
  techstack: React.ReactNode[];
  thumbnail: StaticImageData;
  description: string;
  github: string;
  deployment?: string;
}

const Card = ({
  title,
  role,
  techstack,
  thumbnail,
  description,
  github,
  deployment,
}: ProjectProps) => {
  return (
    <div className=" bg-gradient-to-br from-stone-500 to-stone-200 flex flex-col items-center rounded-3xl p-10 space-y-3 w-full h-full">
      <Image
        src={thumbnail}
        alt={title}
        className="object-cover aspect-video rounded-3xl w-10/12"
      />
      <div className="flex font-bold text-2xl justify-between w-full">
        <p className="font-bold text-2xl">{title}</p>{" "}
        <div className="flex space-x-2">
          <Link href={github} target="_blank">
            <FaGithub />
          </Link>
          {deployment && (
            <Link href={deployment} target="_blank">
              <FaLink />
            </Link>
          )}
        </div>
      </div>

      <p className="font-semibold text-xl w-full">Role: {role}</p>
      <div className="flex justify-start w-full space-x-3 text-xl text-stone-800">
        {techstack.map((icon, index) => (
          <div key={index} className="text-xl">
            {icon}
          </div>
        ))}
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Card;
