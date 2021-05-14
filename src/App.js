import React from 'react';
import './App.css';
import VideoCard from "./VideoCard";
import reels from "./Data";
function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png"
          alt="logo"
        />
        <h3>YT Food Reels</h3>
      </div>
      <div className="app__video">
        {
          reels.map(e => {
            console.log(e)
            return(
              <VideoCard reels = {e} />
            )
          })
        }
        {/* <VideoCard/>
        <VideoCard/>
        <VideoCard/> */}
      </div>
    </div>
  );
}

export default App;
