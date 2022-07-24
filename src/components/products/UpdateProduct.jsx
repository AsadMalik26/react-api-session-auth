import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productOperation from "../../services/ProductOperations";

const UpdateProduct = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  console.log("Params: ", params); // it is returning the param object
  console.log("Params ID: ", params.id); //it is returning the id
  console.log("In Update: ", props); // it return the location, history etc in props object - i.e the default props object

  // console.log("Variables Values For every click: ", title, price, description);

  const handleUpdateProduct = () => {
    console.log("Update Clicked");
    console.log(
      "Variables Value before operation called: ",
      title,
      price,
      description
    );
    productOperation
      .updateProduct(params.id, { title, price, description })
      .then((data) => {
        console.log("Updated", data);
        console.log(
          "Variables Value AFTER operation called: ",
          title,
          price,
          description
        );
        navigate("/products");
      })
      .catch((err) => console.log("Error Update: ", err));
  };

  useEffect(() => {
    productOperation
      .getSingleProduct(params.id)
      .then((data) => {
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description);

        // it is empty in 1st attempt
        console.log(
          "Data Variables Value",
          data.title,
          data.price,
          data.description
        );
      })
      .catch((err) => console.log("Error Fetching record: ", err));
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h1>Update product</h1>
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateProduct}
        >
          Update
        </Button>
      </Grid>
      <Grid item xs={3}></Grid>
      {/* </Grid> */}
    </Grid>
  );
};

export default UpdateProduct;
