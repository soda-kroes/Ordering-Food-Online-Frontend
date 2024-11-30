import React, { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./Theme/DarkTheme";
import { CssBaseline } from "@mui/material";

import CustomerRouter from "./component/Routers/CustomerRouter";
import { useDispatch, useSelector } from "react-redux";
import {getUser} from "./State/Authentication/Action";
import Auth from "./component/Auth/Auth";
import { findCart } from "./State/Cart/Action";

const App = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Auth />
      <CustomerRouter />
    </ThemeProvider>
  );
};

export default App;
