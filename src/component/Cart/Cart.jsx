import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CartItem from "./CartItem";
import AddressCart from "./AddressCart";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
// import * as Yub from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../State/Order/Action";
import { useNavigate } from "react-router-dom";


export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pinCode: "",
  city: "",
};





const items = [1, 1, 1, 1];

const Cart = () => {

  const { auth } = useSelector((store) => store);
  
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const [open, setOpen] = useState(false);

  const handleSubmit = (values) => {
    console.log("values: " + values);
    dispatch(createOrder(jwt));
  };

  const createOrderUsingSelectAddress = () => {
    // Function logic here
  };

  const handleOpenAddressModel = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { cart } = useSelector((store) => store);

  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pb-10 pt-10">
          {cart?.cartItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>$559</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>$21</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>$21</p>
              </div>
              <Divider />
              <div className="flex justify-between text-gray-400">
                <p>Total Pay</p>
                <p>$1500</p>
              </div>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />

        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {items.map((item, index) => (
                <AddressCart
                  key={index}
                  handleSelectAddress={createOrderUsingSelectAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5 bg-gray-800 rounded-md shadow-md">
                <AddLocationAltIcon style={{ color: "#ffffff" }} />
                <div className="space-y-3 text-gray-300">
                  <h1 className="font-semibold text-lg text-white">
                    Add New Address
                  </h1>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModel}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="streetAddress"
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="state"
                    label="State"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="city"
                    label="City"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="pinCode"
                    label="Pin Code"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    color="primary"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
