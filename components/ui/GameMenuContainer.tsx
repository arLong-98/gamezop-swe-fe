import GameMenu from "@/components/ui/GameMenu";
import { devURL } from "@/config/home";

async function fetchGameData() {
  const res = await fetch(devURL);

  const resData = await res.json();
  return resData.data;
}

async function GameMenuContainer() {
  const { games, categories } = await fetchGameData();

  return <GameMenu categories={categories} allGames={games} />;
}

export default GameMenuContainer;
