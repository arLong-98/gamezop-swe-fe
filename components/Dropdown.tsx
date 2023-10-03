"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import GameCard from "./GameCard";
import type { gameObjectType } from "@/config/home";

function Dropdown({ allGames }: DropdownProps) {
  const [filteredGames, setFilteredGames] = useState<Array<gameObjectType>>([]);

  function handleInputChange(value: string) {
    if (value) {
      const filteredList = allGames.filter(({ name }: gameObjectType) => {
        if (name.toLowerCase().includes(value)) return name;

        return false;
      });

      setFilteredGames(filteredList);
    } else {
      setFilteredGames([]);
    }
  }

  return (
    <div className="relative">
      <SearchInput handleChange={handleInputChange} />
      {filteredGames.length > 0 && (
        <ul className="flex flex-col gap-2 z-30 absolute bottom-[-310px] right-0 h-[300px] w-[300px] px-[10px] py-[10px] overflow-scroll border-1 bg-white text-tinted-black">
          {filteredGames.map((game) => {
            return <GameCard isSmall={true} key={game.code} gameData={game} />;
          })}
        </ul>
      )}
    </div>
  );
}

interface DropdownProps {
  allGames: Array<gameObjectType>;
}

export default Dropdown;
