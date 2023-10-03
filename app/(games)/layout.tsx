import Header from "@/components/Header";
import { homeNavData } from "@/config/home";

function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header navItems={homeNavData} />
      <div className="px-[30px] mx-auto md:px-[70px]">{children}</div>
    </>
  );
}

export default GameLayout;
