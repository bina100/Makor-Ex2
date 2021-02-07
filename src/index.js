import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


function App() {
  const [posts, setPosts] = useState(null);
  const fetchData = async () => {
    const response = await axios.get(
      'https://www.live-rates.com/rates'
    );
    setPosts(response.data);
  };

  return (
    <div className="App">

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>
      {/* Display data from API */}
      <div className="posts">
        {posts &&
          posts.map((posts, index) => {
            return (
              <div className="posts" key={index}>
               
                <div className="details">
                  <p>currency: {posts.currency}  
                       rate: {posts.rate}  
                       bid: {posts.bid}  
                       ask: {posts.ask} 
                       high: {posts.high}  
                       low: {posts.low} 
                       open: {posts.open} 
                       close: {posts.close} 
                       timestamp: {posts.timestamp} 
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);