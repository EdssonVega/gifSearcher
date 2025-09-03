import React from "react";

export const GifsApp = () => {
  return (
    <>
      <div className="content-center">
        <h1>Gifs Searcher</h1>
        <p>Discover and share the perfect gif!</p>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search gifs" />
        <button>Search</button>
      </div>

      <div className="previous-searches">
        <h2>Previous searches</h2>
        <ul className="previous-searches-list">
          <li>Dexter</li>
          <li>Shingeki no kyojin</li>
          <li>Avatar</li>
        </ul>
      </div>

      <div className="gifs-container"></div>
    </>
  );
};
