import CategorySection from "@/components/ui/CategorySection";
import GameCard from "@/components/GameCard";
import { devURL, type gameObjectType } from "@/config/home";

export async function generateStaticParams() {
  const res = await fetch(devURL).then((res) => res.json());

  const slugArray = [{ slug: "all" }];

  for (const [key] of Object.entries(res.data.categories)) {
    slugArray.push({ slug: key });
  }

  return slugArray;
}

async function fetchGameData(categorySlug: string) {
  const resData = await fetch(devURL)
    .then((res) => res.json())
    .then((res) => res.data);

  const { games, categories } = resData;

  if (categorySlug === "all") {
    return { category: "All", list: games };
  }

  const list = games.filter(({ categories }: gameObjectType) => {
    return categories.includes(categorySlug);
  });

  return { category: categories[categorySlug], list };
}

async function GamePage({ params }: GamePageProps) {
  const { category, list } = await fetchGameData(params.games);

  return (
    <CategorySection sectionTitle={`${category} Games`}>
      {list.map((game: gameObjectType) => {
        return <GameCard key={game.code} gameData={game} />;
      })}
    </CategorySection>
  );
}

interface GamePageProps {
  params: { games: string };
}

export default GamePage;
