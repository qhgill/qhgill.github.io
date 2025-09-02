import { StaticImageData } from "next/image";
import Image from "next/image";
interface SectionProps {
  organization: string;
  role: string;
  start: string;
  end: string;
  icon: StaticImageData;
  description: string;
}

const Section = ({
  organization,
  role,
  start,
  end,
  icon,
  description,
}: SectionProps) => {
  return (
    <div className="flex items-center text-stone-800 w-full">
      <Image
        src={icon}
        alt={organization}
        className="aspect-square object-cover w-1/7 mr-10"
      />
      <div className="flex flex-col items-start space-y-5">
        <p className="text-3xl font-bold">{organization}</p>
        <div className="text-2xl">
          <p className="font-semibold">{role}</p>
          <p className="italic">
            {start} - {end}
          </p>
        </div>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Section;
