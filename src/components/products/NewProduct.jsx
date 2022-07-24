import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productOperation from "../../services/ProductOperations";

const NewProduct = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleAddProduct = () => {
    console.log("Add Clicked");
    productOperation
      .addProduct({ title, price, description })
      .then((data) => {
        console.log("Posted", data);
        navigate("/products");
      })
      .catch((err) => console.log("Error", err));
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h1>Add new product</h1>
      </Grid>

      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          value={title}
          label="title"
          variant="filled"
          fullWidth
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          value={price}
          label="price"
          variant="filled"
          fullWidth
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="number"
        />
        <TextField
          value={description}
          label="description"
          variant="filled"
          fullWidth
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          multiline
          rows={3}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      {/* <Grid container> */}
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Add
        </Button>
      </Grid>
      <Grid item xs={3}></Grid>
      {/* </Grid> */}
    </Grid>
  );
};

export default NewProduct;
