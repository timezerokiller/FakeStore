import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { useGetCategories } from "shared/hooks/useGetCategories";

export const Navbar = () => {
  const { data, isError, isLoading } = useGetCategories();

  console.log(data, "data");

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (data) {
    return data.map((category, index) => (
      <ListItem key={index} disablePadding>
        <ListItemButton>
          <Link to={`/category/${category}`}>{category}</Link>
        </ListItemButton>
      </ListItem>
    ));
  }
};
