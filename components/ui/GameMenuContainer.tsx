import GameMenu from "@/components/ui/GameMenu";

async function fetchGameData() {
  const res = await fetch(
    "https://dev-meteor.gamezop.com/v1/games/list?id=cfuucl7YgA&lang=en"
  );

  const resData = await res.json();
  return resData.data;
}

async function GameMenuContainer() {
  const { games, categories } = await fetchGameData();

  return <GameMenu categories={categories} allGames={games} />;
}

export default GameMenuContainer;
