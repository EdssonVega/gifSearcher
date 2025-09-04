import type { Gif } from "../interfaces/gif";

interface Props {
  gifList: Gif[];
}

export const GifsList = ({ gifList = [] }: Props) => {
  return (
    <div className="gifs-container">
      {gifList.map((gif) => (
        <div key={gif.url} className="gif-card">
          <img
            src={gif.url}
            alt={gif.title}
            height={gif.height}
            width={gif.width}
          />
          <p>
            {gif.width}x{gif.height} px
          </p>
        </div>
      ))}
    </div>
  );
};
