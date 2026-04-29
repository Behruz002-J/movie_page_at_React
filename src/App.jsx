import axios from "axios";

import { useEffect, useState } from "react";
import MovieType from "./components/UserMovie";

export default function App() {
  let API_KEY = "dcea1fd7b3e65d34387ad6de7ef9cc5e";
 
  // const [users, setUsers] = useState([]);
const [action,setAction] = useState("top_rated")
const [movies,setMovies] = useState([])

  useEffect(() => {
    const action = window.localStorage.getItem("action")
    const apiUrl = `https://api.themoviedb.org/3/movie/${action}?api_key=${API_KEY}`;
    console.log(apiUrl);
    
     async function fetchData() {
     const data = await axios.get(apiUrl)
    setMovies(data.data.results)
    }
    fetchData();
  }, [action,movies]);

  function chosenAction(chosenAction) {
    window.localStorage.setItem("action",chosenAction)
    setAction(chosenAction)
  }

  
  return (
    <>
      <div>
        <div className="header-inner">
          <div className="container rel">
            <div className="row2">
              <button onClick={() => chosenAction("top_rated")} value="top_rated" className="btns">
                Top kinolar
              </button>
              <button onClick={() => {
                chosenAction("popular")
              }} value="popular" className="btns">
                popular
              </button>
              <button onClick={() => {
                chosenAction("upcoming")
              }} value="upcoming" className="btns">
                upcoming
              </button>
            </div>

            <div className="fl">
              <div className="row1">
                <input type="text" placeholder="search" id="search" />
              </div>

              <div className="row1">
                <input type="number" placeholder="min" id="min" />
                <input type="number" placeholder="max" id="max" />
              </div>

              <div className="row1">
                <input type="number" placeholder="score" id="score" />
              </div>

              <button className="btn" type="button">
                button
              </button>
            </div>
          </div>
        </div>

        <div className="container">
         <MovieType movies = {movies} />
          <div className="pn">
            <button className="prev">prev</button>
            <span className="title">1</span>
            <button className="next">next</button>
          </div>
        </div>
      </div>
    </>
  );
}
