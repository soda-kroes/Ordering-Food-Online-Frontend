import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const EventCart = () => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 345 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ciKijY18I0-wpWNQzrNpz5gwr70q2DRH5HNlphkOcFdwqKq6ftyMEkE&s"
      />
      <CardContent>
        <Typography variant="h5">Indian Fast Food</Typography>
        <Typography variant="body2">50% off on your first order</Typography>
        <div className="py-2 space-y-2">
          <p>{"mumbai"}</p>
          <p className="text-sm text-blue-500">February 14, 2024 12:00 AM</p>
          <p className="text-sm text-red-500">February 15, 2024 12:00 AM</p>
        </div>
      </CardContent>
      {false && (
        <CardActions>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};

export default EventCart;
