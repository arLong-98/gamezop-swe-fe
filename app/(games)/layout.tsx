import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="px-[30px] mx-auto laptop:px-[70px] max-w-[1440px]">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default GameLayout;
