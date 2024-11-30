import React from "react";
import OrderCart from "./OrderCart";
import RestaurantCart from "../Restaurant/RestaurantCart";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { auth } = useSelector(store=>store);
  console.log("auth-------------", auth);
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorite</h1>
      <div className="flex flex-wrap justify-center">
        {auth.favorites?.map((item,index) => {
          return(
            <div key={index}>
              <RestaurantCart item={item} />
            </div>
          )
        })}
       
      </div>
    </div>
  );
};

export default Favorites;
