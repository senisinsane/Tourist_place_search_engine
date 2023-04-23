import './PlaceDetails.css';
import './HomePage.css';

import React from 'react';
import { useLocation } from 'react-router-dom';
import  { useState,useEffect } from 'react';
import Chip from '@mui/material/Chip';




function PlaceDetails() {
    const location = useLocation();
    const itemString = new URLSearchParams(location.search).get('item');
    const item = JSON.parse(decodeURIComponent(itemString));
    const [nearbyData, setNearbyData] = useState([]);
    const [isLoading, setIsLoading] = useState([]);


    useEffect(() => {
        async function fetchData() {
          setNearbyData(nearbyData);
          setIsLoading(true) // set isLoading to true to show the loading spinner
          const response = await fetch(`http://localhost:5000/api/nearby_data?query=${item.title}`);
          const textData = await response.json();
          setNearbyData(textData);
          setIsLoading(false); // set isLoading back to false after data is fetched
        }
    
        fetchData();
      }, []);

    console.log(item)
    const cards = [1, 2, 3, 4, 5, 6];

    const reviewTags = [];
    const Dest = []
  
    for (const key in item) {
      if (key.includes("city") && !item[key].includes("0")) {
        Dest.push(item[key]);
      }
      if (key.includes("state") && !item[key].includes("0")) {
        Dest.push(item[key]);
      }
    }
  
    for (const key in item) {
      if (key.includes("reviewsTags") && !item[key].includes("0")) {
        reviewTags.push(item[key]);
      }
    }
  
    // const { city, state } = item;
    return (
    
      <div className="place-container">
        <div className="place-info">
          <h1>{item.title}</h1>
          <div className="place-image">
            <img src={item.validImageUrl} alt="item" />
          </div>
  
          {Dest.length === 1 ? (
          <h2>{Dest[0]}</h2>
          ) : Dest.length === 2 ? (
          <h2>{Dest[0]}, {Dest[1]}</h2>
          ) : (
          <h2>No destination found</h2>
          )}
          <p>
            Description
            <br></br>
            <p1>
              {item.description}
            </p1>
          </p>
          <p>
            Address
            <br></br>
            <p1>
              {item.address}
            </p1>
          </p>
          <h3><b>Average Rating</b> : {item.totalScore}</h3>
          <h3>Reviews</h3>
           <div style ={{margin:'3px', marginBlockEnd:'30px'}} className="display">
        {reviewTags.map((tag, index) => (
                  <Chip label= {tag} color="primary"/>
          // <button key={index} className="review-tag">{tag}</button>
        ))}
        </div>
        </div>
  
        <div className="card-container" style={{ overflow: 'scroll',    width: '30rem', maxHeight: 'calc(100vh - 1px)' }}>
        <h2>Nearby Places</h2>

        <div className="container-fluid">

        {isLoading ? ( 
          <div style={{left: '84%'}} id="loading-container">
          <div style={{'--iteration': '1', '--color': 'red'}}></div>
          <div style={{'--iteration': '2', '--color': 'orange'}}></div>
          <div style={{'--iteration': '3', '--color': 'yellow'}}></div>
          <div style={{'--iteration': '4', '--color': 'green'}}></div>
          <div style={{'--iteration': '5', '--color': 'blue'}}></div>
          <div style={{'--iteration': '6', '--color': 'purple'}}></div>
        </div>

        ) : (
 <div>

  {nearbyData.map((item, index) => (
    <div key={index} className="col">
      <div onClick={() => window.open(`/place/${item.place_id}?item=${encodeURIComponent(JSON.stringify(item))}`)} className="card h-100" style={{ margin: '10px', boxShadow: '5px 5px 10px #888888' }}>

        {console.log(item)}
        <img src={item.validImageUrl} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{item.city},{item.state}</li>
        </ul>
      </div>
    </div>
  ))}

</div>

)}
</div>

      </div>
      </div>
    );
  }

export default PlaceDetails;
