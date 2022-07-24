import { Grid, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import productOperation from "../../services/ProductOperations";

const SingleProduct = (props) => {
  console.log("Single Product Rendered");
  const navigate = useNavigate();
  const { product, onDelete } = props;

  return (
    <Grid item lg={4} md={6} sm={6} xs={12} style={{ border: "1px dotted" }}>
      <span>
        <h2>
          {product.title}
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => {
              console.log("When Edit Clicked: e:", e);
              console.log("When Edit Clicked: props:", props);
              console.log("Navigate to update page");

              navigate("/products/update/" + product._id);
            }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={(e) => {
              productOperation
                .deleteProduct(product._id)
                .then((data) => {
                  console.log("Deleted: ", data);
                  onDelete();
                })
                .catch((err) => console.log("Error while delete: ", err));
            }}
          >
            Delete
          </Button>
        </h2>
      </span>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
    </Grid>
  );
};

export default SingleProduct;
