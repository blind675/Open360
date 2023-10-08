import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const navIcons = [
    { src: "/assets/icons/add.svg", alt: "Add Project", href: "/add-project" },
    { src: "/assets/icons/user.svg", alt: "User Profile", href: "/" },
  ];

  return (
    <header className="w-full bg-white fixed border-b-2 z-10">
      <nav className="p-4 flex justify-between">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/assets/logo.svg" width={36} height={36} alt="logo" />

          <p className="ml-2 text-2xl font-bold text-black">
            Open <span className="text-primary">360</span>
          </p>
        </Link>

        <div className="flex gap-4 items-center">
          {navIcons.map((icon, index) => (
            <Link
              key={index}
              href={icon.href}
              className="hover:border-b-2 hover:border-primary"
            >
              <Image src={icon.src} width={28} height={28} alt={icon.alt} />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
