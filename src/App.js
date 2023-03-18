import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Search from "./components/Search";

export default function App() {
  const [movieData, setMovieData] = useState([]);
  const [searchValue, setSearchValue] = useState("Naruto");

  const getMovieRequest = async (searchValue) => {
    const apiKey = "2e3cc626";
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;
    //http://www.omdbapi.com/?t=Game of Thrones&Season=1&Episode=1&apikey=${apiKey}

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovieData(responseJson);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <Header />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movieData={movieData.Search} />
    </div>
  );
}
