async function fetchGameOfTheWeekData() {
  const res = await fetch(
    "https://dev-meteor.gamezop.com/v1/games/list?id=cfuucl7YgA&lang=en"
  );

  const resData = await res.json();
  const {
    data: { games, gameOfTheWeek },
  } = resData;

  return games.find(({ code }: any) => code === gameOfTheWeek);
}

async function GameOfTheWeek() {
  const { name } = await fetchGameOfTheWeekData();

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-7xl">Game Of The Week</h2>
      <div className="w-full relative">
        <img
          className="object-cover w-full h-full"
          alt="Game of the week"
          src="https://media.istockphoto.com/id/1398289137/vector/pixel-game-win-screen-retro-8-bit-video-game-interface-with-you-win-text-computer-game-level.jpg?s=1024x1024&w=is&k=20&c=cWGGajuuyexJrtZQ5HH3TWjT0pp-O_1yFVFlF-wS6b0="
        />
        <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-transparent opacity-0 transition-all duration-200 hover:bg-blurGradient hover:opacity-100">
          <h3 className="text-3xl">{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default GameOfTheWeek;
