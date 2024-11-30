import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Card } from "@mui/material";

const AddressCart = ({ item, showButton, handleSelectAddress }) => {
  return (
    <Card className="flex gap-5 w-64 p-5 bg-gray-800 rounded-md shadow-md">
      <HomeIcon style={{ color: "#ffffff" }} />
      <div className="space-y-3 text-gray-300">
        <h1 className="font-semibold text-lg text-white">Home</h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis harum
          ut ipsa? Ex iusto nihil aut reiciendis odit ad, soluta corrupti
          mollitia molestias optio quisquam natus modi voluptas qui repellat.
        </p>
        {showButton && (
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleSelectAddress(item)}
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
};

export default AddressCart;
