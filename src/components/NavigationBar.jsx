import React from "react";
import { IconButton, InputBase, Button, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const NavigationBar = () => {
  return (
    <div className="nb_aw_container">
      <div className="size_manager">
        <div className="logo nb_c1">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/sports-logo-png-transparent.png"
            alt="logo"
          />
        </div>
        <nav className="nb_c1">
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Order</li>
            <li>login</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="other nb_c1">
          <div className="search_aw">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "300",
                borderRadius: "20px",
              }}
            >
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  bgcolor: "white",
                  borderRadius: "30px",
                  p: "5px",
                }}
                placeholder="Search Your Products"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
          <AddShoppingCartIcon
            className="carticon"
            sx={{ color: "var(--text)", cursor: "pointer" }}
          />
          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
            }}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
