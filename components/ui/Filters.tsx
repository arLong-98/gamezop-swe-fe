import FilterItem from "@/components/FilterItem";

function Filters({
  categories,
  updateActiveFilter,
  activeFilter,
}: FiltersProps) {
  function renderFilters() {
    const filterArray = [];
    for (const [key, value] of Object.entries(categories)) {
      filterArray.push(
        <FilterItem
          key={key}
          onClick={updateActiveFilter}
          filterId={key}
          filterName={value}
          isActive={activeFilter === key}
        />
      );
    }

    return filterArray;
  }

  return (
    <div className="flex gap-5">
      <FilterItem
        onClick={updateActiveFilter}
        filterId="all"
        filterName="All Games"
        isActive={activeFilter === "all"}
      />
      {renderFilters()}
    </div>
  );
}

interface FiltersProps {
  categories: { string: string };
  updateActiveFilter: Function;
  activeFilter: string;
}

export default Filters;
