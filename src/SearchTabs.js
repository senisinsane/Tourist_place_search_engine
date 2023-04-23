// import { useState } from "react";
// import {Tab,Tabs,TabList,TabPanel} from "react-tabs";
// import HomePage from './HomePage';
// import SearchByImage from './SearchByImage'
// import 'react-tabs/style/react-tabs.css';

// const SearchTabs = () => {
//   const [selectedTabIndex, setSelectedTabIndex] = useState(0);

//   function handleTabSelect(index) {
//     setSelectedTabIndex(index);
//   }

//     return(
//         <Tabs className="Tabs" selectedIndex={selectedTabIndex} onSelect={handleTabSelect}>
//         <div> <h1>Travel Recommendation</h1></div>
        
//        <TabList>
//          <Tab>Search By Text</Tab>
//          <Tab>Search By Image</Tab>
//        </TabList>

//       <TabPanel>
//         <HomePage/>
//        </TabPanel>
//        <TabPanel>
//        <SearchByImage/>
//        </TabPanel>
//      </Tabs>

//     );
// }
// export default SearchTabs;

import { useState } from "react";
import {Tab,Tabs,TabList,TabPanel} from "react-tabs";
import HomePage from './HomePage';
import SearchByImage from './SearchByImage'
import 'react-tabs/style/react-tabs.css';
import './SearchTabs.css'; // Import your CSS file

const SearchTabs = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  function handleTabSelect(index) {
    setSelectedTabIndex(index);
  }

    return(
        <Tabs className="Tabs" selectedIndex={selectedTabIndex} onSelect={handleTabSelect}>
        <div className="tourist-spots"> <h1>Travel Recommendation</h1>

</div>
        
       <TabList>
         <Tab style = {{  fontFamily: 'auto',
    fontSize: '28px',
    fontWeight: '900'}}>Search By Text</Tab>
         <Tab style = {{  fontFamily: 'auto',
    fontSize: '28px',
    fontWeight: '900'}}>Search By Image</Tab>
       </TabList>

      <TabPanel>
        <HomePage/>
       </TabPanel>
       <TabPanel>
       <SearchByImage/>
       </TabPanel>
     </Tabs>

    );
}
export default SearchTabs;
