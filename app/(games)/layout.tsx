import Header from "@/components/Header";
import { homeNavData } from "@/config/home";

function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[30px] md:px-[100px]">
      <Header navItems={homeNavData} />
      {children}
    </div>
  );
}

export default GameLayout;
