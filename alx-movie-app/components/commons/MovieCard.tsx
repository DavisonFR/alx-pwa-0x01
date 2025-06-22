
import React from 'react';

interface MovieCardProps {
  title: string;
  image: string;
  year: number;
}

const MovieCard = ({ title, image, year }: MovieCardProps) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden w-[200px]">
      <img src={image} alt={title} className="w-full h-[300px] object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;

