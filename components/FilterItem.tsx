import clsx from "clsx";

function FilterItem({
  filterName,
  filterId,
  onClick,
  isActive,
}: FilterItemProps) {
  function handleClick() {
    onClick(filterId);
  }

  return (
    <li className="list-none ">
      <button
        className={clsx("px-[36px] py-[18px] rounded-3xl", {
          "bg-white text-tinted-black": isActive,
          "bg-tinted-black text-white": !isActive,
        })}
        onClick={handleClick}
      >
        {filterName}
      </button>
    </li>
  );
}

interface FilterItemProps {
  filterName: string;
  filterId: string;
  onClick: Function;
  isActive: boolean;
}

export default FilterItem;
