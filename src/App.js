import React from 'react';
import Heading from './components/Heading';
import MainJobsBoard from './components/MainJobsBoard'; 

const App = () => {
  return (
    <div>
      <Heading />
      <MainJobsBoard />
      <div className="footer">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/byohannes">Berhane Yohannes</a>.
      </div>
    </div>
  );
};

export default App;
