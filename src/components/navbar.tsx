import { NAV } from "@/data/nav";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-evenly w-full my-3">
      <Link href="/" className="text-2xl font-bold text-stone-900">
        QUIN GILL
      </Link>
      <div className="flex justify-end space-x-20 text-stone-700 text-2xl font-semibold w-2/3">
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
