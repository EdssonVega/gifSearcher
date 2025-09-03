interface Props {
  previousSearches: string[];
}

export const PreviousSearches = ({ previousSearches = [] }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Previous searches</h2>
      <ul className="previous-searches-list">
        {previousSearches.map((term) => (
          <li key={term}>{term}</li>
        ))}
      </ul>
    </div>
  );
};
