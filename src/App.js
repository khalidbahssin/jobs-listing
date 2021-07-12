import React, { useState } from 'react';
import data from './data.json';
import Jobs from './components/Jobs';
import Header from './components/Header';

function App() {

  const [filterKeywords, setfilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  }

  const deleteKeyword = (data) => {

    const newKeyword = filterKeywords.filter((key) => key != data);
    setfilterKeywords(newKeyword);
  }

  const clearAll = () => {
    setfilterKeywords([]);
  }

  return (
    <div >
      <div className="header"></div>

      {filterKeywords.length > 0 && <Header
        keywords={filterKeywords}
        removekeyword={deleteKeyword}
        clearAll={clearAll} />}

      <Jobs
        keywords={filterKeywords}
        data={data}
        setkeywords={addFilterKeywords} />

    </div>
  );
}

export default App;
