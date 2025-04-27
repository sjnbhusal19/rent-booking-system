import React from 'react';

const Card = ({ image, description, location }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt="Card Image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default Card;
