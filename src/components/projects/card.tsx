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
    <div className="border-1 border-stone-600 flex flex-col items-center rounded-3xl p-3">
      <Image
        src={thumbnail}
        alt={title}
        className="object-cover aspect-square rounded-3xl w-10/12"
      />
      <p>{title}</p>
      <p>{role}</p>

      {techstack.map((icon, index) => (
        <div key={index}>{icon}</div>
      ))}
      <p>{description}</p>
      <div className="flex">
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
  );
};

export default Card;
