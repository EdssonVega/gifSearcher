import { useState } from "react";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGif } from "./gifs/actions/get-gif";
import { GifsList } from "./gifs/components/GifsList";
import { Gif } from "./gifs/interfaces/gif";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleSearch = async (term: string, force = false) => {
    if (previousTerms.includes(term) && !force) return;

    if (!previousTerms.includes(term)) {
      setPreviousTerms([term, ...previousTerms]);
    }

    const gifs = await getGif(term);
    setGifs(gifs);
  };

  const handleTermClicked = async (term: string) => {
    await handleSearch(term, true);
  };

  return (
    <>
      <CustomHeader
        title="Gif searcher"
        description="Discover and share the perfect Gif!"
      />

      <SearchBar placeholder="Search Gif..." onQuery={handleSearch} />

      <PreviousSearches
        previousSearches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      <GifsList gifList={gifs} />
    </>
  );
};
