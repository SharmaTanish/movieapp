import { data } from "../data";
import Navbar from "./navbar";
import MovieCard from "./moviecard";
import "../style.css";
import React from "react";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main" >
        <div className="tabs" >
          <div className="tab" >Movie</div>
          <div className="tab" >Favourites</div>

        </div>

        <div className="list" >
   
          {data.map(movie => {
              
             return <MovieCard movie={movie} /> // HERE MUST WRITE RETURN KEYWORD but for single line we need to write return in fat arrow function? !!!!!!!!!!!!!!!!!!!!
              })}
        </div>

      </div>
    </div>
  );
}

export default App;
