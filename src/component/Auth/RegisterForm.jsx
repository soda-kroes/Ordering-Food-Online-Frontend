import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Field, Formik, Form } from "formik"; // Import Form from Formik
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../State/Authentication/Action";


const RegisterForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("form values: ", values);
    dispatch(registerUser({userData:values,navigate}));
  };

  const handleChange = () =>{}

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="Full Name"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <FormControl margin="normal" fullWidth>
            <InputLabel id="role-simple-select-label">Role</InputLabel>
            <Field as ={Select}
              labelId="role-simple-select-label"
              id="role-simple-select"
              label="Role"
              name="role"
            >
              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              <MenuItem value={"ROLE_ADMIN"}>Restaurant Owner</MenuItem>
              
            </Field>
          </FormControl>

          <Button
            sx={{ mt: 2, padding: "1rem" }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Register
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Already have an account?
        <Button size="small" onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
