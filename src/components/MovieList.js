import React from "react";

export default function MovieList(props) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {props.movieData?.map((movie) => {
        return (
          <div
            key={movie.imdbID}
            className="flex flex-col justify-center items-center m-5"
          >
            <img src={movie.Poster} alt={movie.Title} className="h-60 w-52" />
            <p className="text-center mt-1">
              <span className="font-bold italic">Title</span> - {movie.Title}
            </p>
            <p className="text-center">
              <span className="font-bold italic">Year</span> - {movie.Year}
            </p>
          </div>
        );
      })}
    </div>
  );
}
