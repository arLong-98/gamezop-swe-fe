"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Filters from "@/components/ui/Filters";
import GameCard from "@/components/GameCard";

function GameMenu({ categories, allGames }: GameMenuProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  function updateActiveFilter(filterID: string) {
    setActiveFilter(filterID);
  }

  const renderedList = useMemo(() => {
    if (activeFilter === "all") {
      return allGames;
    }
    const list = allGames.filter(({ categories }) => {
      return categories.includes(activeFilter);
    });

    return list;
  }, [allGames, activeFilter]);

  return (
    <>
      <Filters
        updateActiveFilter={updateActiveFilter}
        categories={categories}
        activeFilter={activeFilter}
      />
      <div className="no-scrollbar flex flex-col tablet:flex-row tablet:max-laptop:overflow-scroll tablet:gap-x-[20px] laptop:flex-wrap laptop:gap-x-[24px] gap-y-[30px] mt-10">
        {renderedList.length > 0 &&
          renderedList.slice(0, 11).map((game, index) => {
            return <GameCard key={index} gameData={game} />;
          })}
        <Link
          className="max-mobile:w-full tablet:max-laptop:min-w-[300px] laptop:w-[200px] largeLaptop:w-[417px] h-[278px]"
          href={`/${activeFilter}`}
        >
          <div className="group w-full transition-transform min-w-[187px] h-[278px] bg-blurGradient flex items-center justify-center">
            <p className="text-3xl group-hover:scale-90 duration-200">
              View More
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

interface GameMenuProps {
  categories: { string: string };
  allGames: Array<any>;
}

export default GameMenu;
