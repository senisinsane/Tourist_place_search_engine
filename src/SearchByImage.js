// import logo from './logo.svg';
// import './HomePage.css';
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// // import ComponentWithProps from './ComponentWithProps';

// function SearchByImage() {
//   const [query, setQuery] = useState('');
//   const [data, setData] = useState({ rows: [], currentPage: 1, isLoading: false });

//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileSelect = (event) => {
//     console.log(event.target.files[0])
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!selectedFile) {
//       console.log('No file selected');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', selectedFile);
//     console.log(formData)

//     fetch('/api/get_similar_images', {
//       method: 'POST',
//       body: formData

//     })
//     .then(response => response.json())
//     .then(result => {
//       setData(result)
//       console.log('Upload success:', result);
//     })
//     .catch(error => {
//       console.error('Upload error:', error);
//     });
//   };
// console.log(data)


//   return (
//     <div>



// <input type="file" onChange={handleFileSelect} />
//       <button onClick={handleUpload}>Upload</button>
      
      
//    </div>

//    )
//                   }

// export default SearchByImage;

import logo from './logo.svg';
import './HomePage.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import ComponentWithProps from './ComponentWithProps';

function SearchByImage() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({ rows: [], currentPage: 1, isLoading: false });


  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    console.log(event.target.files[0])
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    console.log(formData)
    setData({ ...data, isLoading: true }); 
    fetch('/api/get_similar_images', {
      method: 'POST',
      body: formData

    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setData({ rows: result, currentPage: 1, isLoading: false }); // set isLoading back to false after data is fetched
      console.log('Upload success:', result);
    })
    .catch(error => {
      console.error('Upload error:', error);
    });
  };
console.log(data)


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


    {/* <h1>Travel Spots</h1> */}
        {/* <input type="text" value={query} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Search</button> */}
<div class="file-upload">
  <input type="file" id="file-select" class="file-select" onChange={handleFileSelect} />
  <label for="file-select" class="file-select-label">Choose file</label>
  <button class="upload-button" onClick={handleUpload}>Upload</button>
</div>

      <div className='header-container'>
      
      </div>
      <div className="container-fluid">
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
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {visibleRows.map((item, index) => (
              <div key={index} className="col">
                <div onClick={() => window.open(`/place/${item.place_id}?item=${encodeURIComponent(JSON.stringify(item))}`)} className="card h-100" style={{ margin: '10px', boxShadow: '5px 5px 10px #888888' }}>
                  {console.log(item.validImageUrl)}
                  <img src={item.validImageUrl} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">City: {item.city}</li>
                    <li className="list-group-item">State: {item.state}</li>
                  </ul>
                </div>
              </div>
            ))}
            {data.rows.length > 0 && ( // only show pagination if there are rows to display
              <div className="pagination-container">
                <nav aria-label="Page navigation" style={{ marginLeft: "43%", marginTop: "20px" }}>
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
    
        )
                    }

    </div>
    </div>
</Router>
  )
                  }

export default SearchByImage;

