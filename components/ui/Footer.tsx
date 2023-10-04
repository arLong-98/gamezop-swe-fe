import Image from "next/image";
import gamezopLogo from "@/public/gamezop-logo.webp";

function Footer() {
  return (
    <div className="flex flex-col gap-5 mt-10 items-center justify-center bg-[#BBBBBB] py-10">
      <Image
        className="hidden tablet:block"
        width={180}
        height={50}
        src={gamezopLogo}
        alt="gamezop"
      />
      <p className="text-2xl text-tinted-black font-semibold">
        Copyright Gamezop Lorem Ipsum
      </p>
    </div>
  );
}

export default Footer;
