// import './HomePage.css';

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// // import ComponentWithProps from './ComponentWithProps';

// function HomePage() {
//   const [query, setQuery] = useState('');
//   const [data, setData] = useState({ rows: [], currentPage: 1, isLoading: false });


//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   }

//   const handleButtonClick = async () => {
//     setData({ ...data, isLoading: true }); // set isLoading to true to show the loading spinner

//     const response = await fetch(`http://localhost:5000/api/data?query=${query}`);
//     const textData = await response.json();
//     console.log(textData)
//     if(textData.length === 0){
//       console.log("emptyyyyyyyyyyyyyyy")
//       alert('Could you please provide the location you are looking for?');

//     }
//     setData({ rows: textData, currentPage: 1, isLoading: false }); // set isLoading back to false after data is fetched

//   }

//   const handlePageChange = (pageNumber) => {
//     setData({ ...data, currentPage: pageNumber });
//   }
  

//   const ROWS_PER_PAGE = 9;
//   const startIndex = (data.currentPage - 1) * ROWS_PER_PAGE;
//   const endIndex = startIndex + ROWS_PER_PAGE;
//   const visibleRows = data.rows.slice(startIndex, endIndex);

//   return (
//     <Router>
//     <div>


//     {/* <h1>Travel Spots</h1> */}
//         <input type="text" value={query} onChange={handleInputChange} />
//         <button onClick={handleButtonClick}>Search</button>

//       <div className='header-container'>
      
//       </div>
//       <div className="container-fluid">
//         {data.isLoading ? ( 
//           <div id="loading-container">
//           <div style={{'--iteration': '1', '--color': 'red'}}></div>
//           <div style={{'--iteration': '2', '--color': 'orange'}}></div>
//           <div style={{'--iteration': '3', '--color': 'yellow'}}></div>
//           <div style={{'--iteration': '4', '--color': 'green'}}></div>
//           <div style={{'--iteration': '5', '--color': 'blue'}}></div>
//           <div style={{'--iteration': '6', '--color': 'purple'}}></div>
//         </div>

//         ) : (
//           <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
//             {visibleRows.map((item, index) => (
//               <div key={index} className="col">
//                 <div onClick={() => window.open(`/place/${item.place_id}?item=${encodeURIComponent(JSON.stringify(item))}`)} className="card h-100" style={{ margin: '10px', boxShadow: '5px 5px 10px #888888' }}>
//                   {/* {console.log(item.validImageUrl)} */}
//                   <img src={item.validImageUrl} className="card-img-top" alt={item.title} />
//                   <div className="card-body">
//                     <h5 className="card-title">{item.title}</h5>

//                     <p className="card-text">{item.description}</p>
//                     <p>{item.city}, {item.state}</p>
//                   </div>
//                   {/* <ul className="list-group list-group-flush">
//                     <li className="list-group-item">City: {item.city}</li>
//                     <li className="list-group-item">State: {item.state}</li>
//                   </ul> */}
//                 </div>
//               </div>
//             ))}
//             {data.rows.length > 0 && ( // only show pagination if there are rows to display
//               <div className="pagination-container">
//                 <nav aria-label="Page navigation" style={{ marginLeft: "43%", marginTop: "20px" }}>
//                   <ul className="pagination">
//                     {[...Array(Math.ceil(data.rows.length / ROWS_PER_PAGE)).keys()].map(pageNumber => (
//                       <li key={pageNumber} className={`page-item ${pageNumber + 1 === data.currentPage ? 'active' : ''}`}>
//                         <button className="page-link" onClick={() => handlePageChange(pageNumber + 1)}>{pageNumber + 1}</button>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//                     </div>

//           )}
//       </div>
    
//         )
//                     }

//     </div>
//     </div>
// </Router>
//   )
//                   }

// export default HomePage;

import logo from './logo.svg';
import './HomePage.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import backgroundImage from './IRback.jpg';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';


// import ComponentWithProps from './ComponentWithProps';


  
function HomePage() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({ rows: [], currentPage: 1, isLoading: false });


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleButtonClick = async () => {
    setData({ ...data, isLoading: true }); // set isLoading to true to show the loading spinner

    const response = await fetch(`http://localhost:5000/api/data?query=${query}`);
    const textData = await response.json();
    console.log(textData)
    setData({ rows: textData, currentPage: 1, isLoading: false }); // set isLoading back to false after data is fetched

  }

  const handlePageChange = (pageNumber) => {
    setData({ ...data, currentPage: pageNumber });
  }
  

  const ROWS_PER_PAGE = 9;
  const startIndex = (data.currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const visibleRows = data.rows.slice(startIndex, endIndex);

  return (
    <Router>
    <div>

    {/* <div className='header-container'> */}
      <div >
      {/* <div class="tourist-spots" style={{padding: '0.2rem'}}>
  <h2 style={{color: 'white'}}>Tourist Spots</h2>
</div> */}

            <input type='text' value={query} onChange={handleInputChange} placeholder="Where you wanna go this holiday?" aria-describedby="button-addon8" class="form-control" style={{width: 750, marginTop: '1rem', marginBottom:'1rem'}}/>
            <div class="input-group-prepend">
            <Button   style={{  display: 'block', margin: '0 auto'}} onClick={handleButtonClick} type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
              {/* <button onClick={handleButtonClick} id="button-addon8" type="submit" class="btn btn-danger"
               style={{  display: 'block', margin: '0 auto'}}><i class="fa fa-search">Search</i></button> */}
            
            </div>
            
      </div>

{/* <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <h1 style={{textAlign: 'center'}}>Travel Spots</h1>
  <input type="text" value={query} onChange={handleInputChange} style={{padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid gray', width: '300px'}} />
</div>

    <button onClick={handleButtonClick}>Search</button> */}
      

      <div className="container-fluid" style={{marginTop: '20px',margin: 1.2}}>
        {data.isLoading ? ( 
          <div id="loading-container">
          <div style={{'--iteration': '1', '--color': 'red'}}></div>
          <div style={{'--iteration': '2', '--color': 'orange'}}></div>
          <div style={{'--iteration': '3', '--color': 'yellow'}}></div>
          <div style={{'--iteration': '4', '--color': 'green'}}></div>
          <div style={{'--iteration': '5', '--color': 'blue'}}></div>
          <div style={{'--iteration': '6', '--color': 'purple'}}></div>
        </div>

        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3" style={{ display: 'flex', flexWrap: 'wrap', marginTop: "12rem"}}>
            {visibleRows.map((item, index) => (
              <div key={index} className="col">
                <div onClick={() => window.open(`/place/${item.place_id}?item=${encodeURIComponent(JSON.stringify(item))}`)} className="card h-100" style={{ boxShadow: '5px 5px 10px #888888' }}>
                  {/* {console.log(item)} */}
                  <div className='card h-100' style={{width: '-webkit-fill-available', margin: '10px', boxShadow: '5px 5px 10px #888888' }}>
                  <img src={item.validImageUrl} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {item.description !== "0" && (
                        <p className="card-text">{item.description}</p>
                      )}
                    {/* <p className="card-text">{item.description}</p> */}
                    <p className="card-text">{item.city}, {item.state} </p>

                  </div>
                  {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item">City: {item.city}</li>
                    <li className="list-group-item">State: {item.state}</li>
                  </ul> */}
                </div>
                </div>
              </div>
            ))}
           
        
      </div>
    
        )
                    }

    </div>
    {data && ( // only show pagination if there are rows to display
              <div className="pagination-container">
                <nav aria-label="Page navigation" style={{ marginLeft: '3%', marginTop: '20px' , marginBottom: '20px' }}>
                  <ul className="pagination">
                    {[...Array(Math.ceil(data.rows.length / ROWS_PER_PAGE)).keys()].map(pageNumber => (
                      <li key={pageNumber} className={`page-item ${pageNumber + 1 === data.currentPage ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(pageNumber + 1)}>{pageNumber + 1}</button>
                  </li>
                ))}
              </ul>
            </nav>
                    </div>

          )}
    </div>
</Router>
  )
                  }

export default HomePage;
