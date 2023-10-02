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
      <div className="flex flex-wrap gap-5 mt-10">
        {renderedList.slice(0, 11).map((game) => {
          return <GameCard key={game.code} gameData={game} />;
        })}
        <Link href={`/${activeFilter}`}>
          <div className="w-[187px] h-[278px] bg-blurGradient flex items-center justify-center">
            <p className="text-3xl">View More</p>
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
