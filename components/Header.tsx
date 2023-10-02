import Image from "next/image";
import Link from "next/link";
import gamezopLogo from "@/public/gamezop-logo.webp";

function Header({ navItems }: HeaderProps) {
  return (
    <header className="">
      <div className="hidden md:flex justify-between py-4">
        <Image src={gamezopLogo} alt="gamezop" />
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
    </header>
  );
}

interface HeaderProps {
  navItems: Array<{ name: string; href: string }>;
}

export default Header;
