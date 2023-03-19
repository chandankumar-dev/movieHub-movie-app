import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Search from "./components/Search";

export default function App() {
  const [movieData, setMovieData] = useState([
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
      Title: "Naruto: Shippuden",
      Type: "series",
      Year: "2007–2017",
      imdbID: "tt0988824",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDI3ZDY4MDgtN2U2OS00Y2YzLWJmZmYtZWMzOTM3YWFjYmUyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
      Title: "Naruto",
      Type: "series",
      Year: "2002–2007",
      imdbID: "tt0409591",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjM0MDRkYzctMTNhMS00ODYwLTgwMWItZDYxNDlhOGY1YjRlXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_SX300.jpg",
      Title: "Boruto: Naruto Next Generations",
      Type: "series",
      Year: "2017",
      imdbID: "tt6342474",
    },
  ]);
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
