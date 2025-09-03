import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  return (
    <>
      <CustomHeader
        title="Gif searcher"
        description="Discover and share the perfect Gif!"
      />
      <SearchBar placeholder="Search Gif..." />
      <PreviousSearches previousSearches={["Dexter", "avatar", "The office"]} />

      <div className="gifs-container"></div>
    </>
  );
};
