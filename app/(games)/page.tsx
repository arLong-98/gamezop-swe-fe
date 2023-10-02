import GameCard from "@/components/GameCard";
import CategorySection from "@/components/ui/CategorySection";
import GameMenuContainer from "@/components/ui/GameMenuContainer";
import GameOfTheWeek from "@/components/ui/GameOfTheWeek";
import { Suspense } from "react";

async function fetchData() {
  const res = await fetch(
    "https://dev-meteor.gamezop.com/v1/games/list?id=cfuucl7YgA&lang=en"
  );

  const resData = await res.json();
  return resData;
}

export default async function Home() {
  const data = await fetchData();

  const {
    data: { games, trendingGames, newlyAddedGames },
  } = data;

  return (
    <>
      <Suspense fallback={<div>Loading.....</div>}>
        <GameOfTheWeek />
      </Suspense>
      <CategorySection sectionTitle="Trending Games">
        {trendingGames.map((gameCode: string) => {
          return (
            <GameCard
              key={gameCode}
              gameData={games.find(({ code }: any) => code === gameCode)}
            />
          );
        })}
      </CategorySection>
      <CategorySection sectionTitle="New Games">
        {newlyAddedGames.map((gameCode: string) => {
          return (
            <GameCard
              key={gameCode}
              gameData={games.find(({ code }: any) => code === gameCode)}
            />
          );
        })}
      </CategorySection>
      <Suspense fallback={<div>Loading...</div>}>
        <GameMenuContainer />
      </Suspense>
    </>
  );
}
