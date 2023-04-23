import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import ComponentWithProps from './ComponentWithProps';
import HomePage from './HomePage.js';
import PlaceDetails from './PlaceDetails.js';
import SearchTabs from './SearchTabs.js';
import backgroundImage from './newIR.jpg';


const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '50vh',
};



function App() {
  return (
    <Router>
      <div> 
        <Route path="/" exact>
          <SearchTabs />
        </Route>
        <Route path="/place/:id" component={PlaceDetails} />


      </div>
    </Router>
  );
}

export default App;
