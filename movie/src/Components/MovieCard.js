import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      className="p-4 bg-white rounded-lg shadow-lg cursor-pointer"
      onClick={handleCardClick}
    >
      <h3 className="text-lg font-bold">{movie.title}</h3>
      {/* You can add more details here like an image or a short description */}
    </div>
  );
};

export default MovieCard;
