import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userOperations from "../../services/UserOperations";
const RegisterPage = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswprd] = useState("");

  console.log("Rendered Register Component");

  const handleSubmit = () => {
    console.log("Submit Clicked");
    let dataObj = { name, email, password };
    console.log("Data Picked: ", dataObj);
    userOperations
      .addUser(dataObj)
      .then((res) => {
        console.log("User Registered: ", res);
        navigate("/login");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
  return (
    <div>
      <h1>Sign up</h1>
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={7} spacing={0} fullWidth>
          <TextField
            label="Name"
            variant="filled"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={7} spacing={0} fullWidth>
          <TextField
            label="Email"
            variant="filled"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={7} spacing={0} fullWidth>
          <TextField
            label="Password"
            variant="filled"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => {
              setPasswprd(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={7} spacing={0} fullWidth>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterPage;
