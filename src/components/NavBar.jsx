import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="bg-gray-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Books App</h1>
      <div>
        <Link
          to="/favorites"
          className="text-white text-2xl font-bold text-white hover:underline"
        >
          Your Favorites
        </Link>
      </div>
    </div>
  );
};
