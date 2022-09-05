import { BellIcon, SearchIcon } from "@heroicons/react/solid";
// import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
// import BasicMenu from "./BasicMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            alt="Netflix Icon"
            className="cursor-pointer object-contain"
          />
        </Link>

        {/* <BasicMenu /> */}

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
          <li className="headerLink">
            <Link href="/Subscriptions">Subscriptions</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <div onClick={logout}>
            <img
              src="https://rb.gy/g1pwyx"
              alt="user Image"
              className="cursor-pointer rounded"
            />
            <h3>Logout</h3>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
