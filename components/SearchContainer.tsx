import { devURL } from "@/config/home";
import Dropdown from "./Dropdown";

async function fetchData() {
  const resData = await fetch(devURL)
    .then((res) => res.json())
    .then((res) => res.data);

  const { games } = resData;
  return games;
}

async function SearchContainer({}: DropdownProps) {
  const gamesData = await fetchData();

  return <Dropdown allGames={gamesData} />;
}

interface DropdownProps {}

export default SearchContainer;
