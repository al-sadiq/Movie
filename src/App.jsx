import { useState } from "react"

import './App.css'

import Request from "./Request"






function App() {
  const [movieData, setMovieData] = useState([]) //Note: since we are dealing with arrays, the starting value must also be an array
  const URL = "https://swapi.dev/api/films/?format=json"

  async function movies() {
    const getdata = await fetch(URL);
    const jsondata = await getdata.json();
    setMovieData(jsondata.results);
    console.log(movieData);

  }

  return (
    <div>

    <Request url = {URL} movies = {movies} />
    

    <div className="main">
    {movieData.map((elem) => (
        <div key={elem.id } className="moviearray"> 
          
          <div className="movietitle" key={elem.title}>{elem.title}</div>
          <div className="episode" key={elem.episode_id}>Episode {elem.episode_id}</div>
          <div className="director" key={elem.director}>Director: {elem.director}</div>
          <div className="producer" key={elem.producer}>Producer(s): {elem.producer}</div>
          <p>{elem.opening_crawl}</p>
          <div className="release_date" key={elem.release_date}>Released {elem.release_date}</div>
          
      </div>
    ))}
    </div>
    
          

    
    </div>
  )

}

export default App;