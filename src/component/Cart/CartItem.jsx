import { Chip, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCartItem, updateCartItem } from "../../State/Cart/Action";

const CartItem = ({ item }) => {
  const { auth, cart } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");


  const handleUpdateCartItem = (value) => {
    // alert(jwt);
    
  console.log('helloitem----', item);
    if (value == -1 && item.items[0].quantity == 1) {
      handleRemoveCartItem();
    }
    const data = { cartItemId: item.id, quantity: item.items[0].quantity + value };
    dispatch(updateCartItem({data, jwt }));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem({ cartItemId: item.id, jwt: auth.jwt || jwt }));
  };

  console.log("myitem: ", item);
  console.log("ingredient: ", item.items[0].ingredients);

  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src={item.items[0].food.images[0]}
            alt=""
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>biryani</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton onClick={() => handleUpdateCartItem(-1)}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="w-5 h-5 text-xs flex items-center justify-center">
                  {item.items[0].quantity}
                </div>
                <IconButton onClick={() => handleUpdateCartItem(1)}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>${item.total}</p>
        </div>
      </div>
      <div className="pt-3 space-x-3">
        {item.items[0].ingredients.map((ingredient) => (
          <Chip label={ingredient} />
        ))}
      </div>
    </div>
  );
};

export default CartItem;
