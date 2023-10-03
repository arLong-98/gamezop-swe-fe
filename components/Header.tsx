import Image from "next/image";
import Link from "next/link";
import gamezopLogo from "@/public/gamezop-logo.webp";
import SearchContainer from "./SearchContainer";
import { Suspense } from "react";

function Header({ navItems }: HeaderProps) {
  return (
    <header className="px-[70px] bg-headerBG">
      <div className="hidden md:flex justify-between py-7">
        <Link href={"/"}>
          <Image width={180} height={50} src={gamezopLogo} alt="gamezop" />
        </Link>
        <div className="flex gap-10 items-center">
          <Suspense>
            <SearchContainer />
          </Suspense>
          <div className="flex gap-5 items-center">
            {navItems.map(({ name, href }) => {
              return (
                <nav key={name}>
                  <Link href={href}>{name}</Link>
                </nav>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

interface HeaderProps {
  navItems: Array<{ name: string; href: string }>;
}

export default Header;
