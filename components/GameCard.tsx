import gameCover from "../public/game-cover.jpg";

function GameCard({ gameData }: GameCardProps) {
  const { name, rating, gamePlays } = gameData;
  return (
    <div className="relative w-[187px] h-[278px] bg-blurGradient">
      <img className=" w-full h-full" src={gameCover.src} alt={name} />
      <div className="z-10 w-full absolute bottom-0 left-0 bg-blurGradient px-2 py-3">
        <h3>{name}</h3>
        <p>Rating - {rating}</p>
      </div>
    </div>
  );
}

interface GameCardProps {
  gameData: any;
}

export default GameCard;
