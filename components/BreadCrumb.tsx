import React from 'react';
type BreadCrumbProps = {
  title: string;
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
};

const BreadCrumb = ({ title, searchWord, setSearchWord }: BreadCrumbProps) => {
  return (
    <div className="breadcumnd-banner">
      <div className="container">
        <div className="breadcumd-content">
          <h1>
            {title}
          </h1>
          <div className="search-bar">
            <input type="text" placeholder="Search........." value={searchWord} onChange={e => setSearchWord(e.target.value)} />
            <span className="icon">
              <i className="fas fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;