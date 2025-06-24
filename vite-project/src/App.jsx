import React from 'react';
import ToggleBackground from './components/ToggleBackground.jsx';
import HiddenSearchBar from './components/HiddenSearchBar.jsx';
import Accordion from './components/Accordion.jsx';
import { accordionData } from '../utils/content.js';
import FormValidation from './components/FormValidation.jsx';

const App = () => {

  return (
    <div>
      {/* <ToggleBackground /> */}
      {/* <HiddenSearchBar/> */}
      {/* <div className="accordion">
        {accordionData.map(({ title, content}) => (
          <Accordion title={title} content={content} />
        ))}

      </div> */}
      {/* <FormValidation/> */}

    </div>
  );
};

export default App;