import Header from "@/components/ui/Header";
import { homeNavData } from "@/config/home";

function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header navItems={homeNavData} />
      <div className="px-[30px] mx-auto laptop:px-[70px] max-w-[1440px]">
        {children}
      </div>
    </>
  );
}

export default GameLayout;
