import gameCover from "../public/game-cover.jpg";

function GameCard({ gameData, isSmall = false }: GameCardProps) {
  const { name, rating } = gameData;

  if (isSmall) {
    return (
      <div className="w-[250px] h-[50px] flex gap-3 cursor-pointer">
        <img className="w-[50px] h-[50px]" src={gameCover.src} alt={name} />
        <div className="">
          <h3 className="text-xl text-ellipsis whitespace-nowrap overflow-hidden">
            {name}
          </h3>
          <p>Rating - {rating}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3">
      <div className="relative w-[187px] h-[278px] bg-blurGradient transition-all hover:scale-105 cursor-pointer">
        <img className=" w-full h-full" src={gameCover.src} alt={name} />
        <div className="z-10 w-full absolute bottom-0 left-0 bg-blurGradient px-2 py-3">
          <h3 className="text-2xl text-ellipsis whitespace-nowrap overflow-hidden">
            {name}
          </h3>
          <p>Rating - {rating}</p>
        </div>
      </div>
    </div>
  );
}

interface GameCardProps {
  gameData: any;
  isSmall?: boolean;
}

export default GameCard;
