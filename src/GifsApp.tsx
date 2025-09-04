import { useState } from "react";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    if (previousTerms.includes(term)) return;
    if (setPreviousTerms.length >= 8) return;
    setPreviousTerms([term, ...previousTerms]);
  };

  return (
    <>
      <CustomHeader
        title="Gif searcher"
        description="Discover and share the perfect Gif!"
      />
      <SearchBar placeholder="Search Gif..." onQuery={handleTermClicked} />
      <PreviousSearches
        previousSearches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      <div className="gifs-container"></div>
    </>
  );
};
