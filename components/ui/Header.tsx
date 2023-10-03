import Image from "next/image";
import Link from "next/link";
import gamezopLogo from "@/public/gamezop-logo.webp";
import gamezopLogoMobile from "@/public/gamezop-sq.webp";
import SearchContainer from "../SearchContainer";
import { Suspense } from "react";

function Header({ navItems }: HeaderProps) {
  return (
    <header className="px-[30px] laptop:px-[70px] bg-headerBG max-w-[1440px] mx-auto">
      <div className="flex justify-between py-7">
        <Link href={"/"}>
          <Image
            className="hidden tablet:block"
            width={180}
            height={50}
            src={gamezopLogo}
            alt="gamezop"
          />
          <Image
            className="block tablet:hidden"
            width={50}
            height={50}
            src={gamezopLogoMobile}
            alt="gamezop"
          />
        </Link>
        <div className="flex gap-10 items-center">
          <Suspense>
            <SearchContainer />
          </Suspense>
        </div>
      </div>
    </header>
  );
}

interface HeaderProps {
  navItems: Array<{ name: string; href: string }>;
}

export default Header;
