interface Props {
  previousSearches: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviousSearches = ({
  previousSearches = [],
  onLabelClicked,
}: Props) => {
  return (
    <div className="previous-searches">
      <h2>Previous searches</h2>
      <ul className="previous-searches-list">
        {previousSearches.map((term) => (
          <li key={term} onClick={() => onLabelClicked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
