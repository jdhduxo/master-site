import React from 'react';
import Nav from './Nav';
import LearnMore from './LearnMore';
import Introduction from './Introduction';
import TechnologyStack from './TechnologyStack';
import GetInTouch from './GetInTouch';
import '../css/App.css';

function App() {
  return (
    // Fragment to include multiple components
    <>
      <Nav />
      <LearnMore />
      <Introduction />
      <TechnologyStack />
      <GetInTouch />
    </>
  );
}

export default App;
