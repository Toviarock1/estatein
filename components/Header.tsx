import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar bg-color1 md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"#"}>Properties</Link>
            </li>
            <li>
              <Link href={"#"}>Services</Link>
            </li>
          </ul>
        </div>
        <Link href={"#"} className="btn btn-ghost text-xl">
          <Image src={"/Logo.svg"} width={120} height={48} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/properties"}>Properties</Link>
          </li>
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/contact"} className="btn text-white">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
