import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import './components.css';

function Histories({ histories }) {
  const [historyContent, setHistoryContent] = useState([]);

  useEffect(() => {
    function getHistories() {
      setHistoryContent(histories);
    }
    getHistories();
  }, [histories]); 

  return (
    <>
      {historyContent.map(x => <div key={x.id}>{x.id}</div>)}
    </>
  );
}

Histories.propTypes = {
  histories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Histories;
