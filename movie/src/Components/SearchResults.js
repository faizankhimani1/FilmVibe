import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white rounded-lg shadow-md">
          <Link to={`/movies/${movie.id}`}>
            <img
              src={movie.imageUrl} // Use the correct property for image URL
              alt={movie.title}
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-gray-700">{movie.genre}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
