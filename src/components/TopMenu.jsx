import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./CSSFiles/TopMenuCss.css";
/* import { styled } from "@mui/system";

const styledLink = styled(
  Typography,
  {}
)({
  color: "white",
  padding: "1em",
}); */

const TopMenu = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            {/* <styledLink> */}
            <Link to="/" className="Link">
              Home
            </Link>
            {/*  <Link to="/products/new" className="Link">
              Add New Products
            </Link> */}
            <Link to="/products" className="Link">
              Products
            </Link>
            <Link to="/contact-us" className="Link">
              Contact Us
            </Link>
            <Link to="/login" className="Link">
              Login
            </Link>
            <Link to="/sign-up" className="Link">
              Sign up
            </Link>
            {/* </styledLink> */}
            {/* style={{color:"white", paddingRight:"1em"}}
style={{color:"white", paddingRight:"1em"}}
style={{color:"white", paddingRight:"1em"}} */}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;
