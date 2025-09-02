import { NAV } from "@/data/nav";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <span className="bg-white block h-1 w-full my-5" />

      <div className="flex justify-between bg-stone-800 text-white text-2xl font-semibold w-2/3">
        {NAV.map(({ title, ref }, index) => (
          <Link key={index} href={ref}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
