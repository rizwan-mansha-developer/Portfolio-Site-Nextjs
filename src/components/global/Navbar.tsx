"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import {CrossIcon} from 'lucide-react'

import Hamburger from "hamburger-react";


interface linksInterface {
  name: string;
  link: string;
}

const links: linksInterface[] = [
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Skill", link: "/skill" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={25} height={25} alt="logo" />
        </Link>

      
        <nav className={isOpen ? `${"fixed block z-20"}` : `${"hidden"}`}>
          <div className=" fixed inset-y-0 right-0 w-1/2 bg-white z-0 overflow-y-auto">
            <div className="text-black  ">
              <button onClick={() => setOpen(!isOpen)} className="ml-[85%] ">
                <CrossIcon className="mt-5 rotate-45" />
              </button>
              {links.map((item, idx) => (
                <div
                  className="p-4 "
                  key={idx}
                  onClick={() => {
                    setOpen(false);
                    // Add any additional logic you want for handling menu item clicks
                  }}>
                  {pathname === item.name ? (
                    <Link
                      href={item.link}
                      className="text-lg font-semibold text-primary">
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.link}
                      className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="md:my-16 sm:my-12 mt-12 px-3 text-zinc-700">
              <p className=" font-bold font-serif text-2xl mb-4">RizStore</p>
              <p className="text-sm font-serif">Social Media</p>
              <div className=" flex justify-start items-center gap-x-5 my-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=100017772258554"
                  target="_blank">
                  <FiFacebook />
                </Link>
                <Link
                  href="https://twitter.com/Muhamma60041182"
                  target="_blank">
                  <FiTwitter />
                </Link>
                <Link
                  href={"https://www.instagram.com/riz_mansha/"}
                  target="_blank">
                  <FiInstagram />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <nav className="hidden sm:block">
          <ul className=" flex items-center gap-x-8">
            {links.map((item: linksInterface, idx: number) => (
              <li className="" key={idx}>
                <Link
                  href={item.link}
                  className="hover:text-purple-400 text-lg duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sm:hidden max-sm:block flex justify-center items-center">
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
        </div>
      </div>
    </header>
  );
}
