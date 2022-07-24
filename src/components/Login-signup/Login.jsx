import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userOperations from "../../services/UserOperations";

const LoginPage = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Rendered Login Component");

  const handleLogin = () => {
    console.log("Login Clicked");
    let dataObj = { email, password };
    console.log("Login Info Picked: ", dataObj);
    userOperations
      .loginUser(dataObj)
      .then((res) => {
        console.log("Response: ", res);
        navigate("/products");
      })
      .catch((err) => {
        console.log("Error: ", err);
        setEmail("");
        setPassword("");
      });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
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
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={7} spacing={0} fullWidth>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
