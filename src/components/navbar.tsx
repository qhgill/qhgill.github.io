import { NAV } from "@/data/nav";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 bg-stone-800 text-white text-xl font-semibold pr-20 w-2/3">
      {NAV.map(({ title, ref }, index) => (
        <Link key={index} href={ref}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
