import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { getAllCategories } from "../../shared/api/categories";

export const Navbar = () => {
  const [menu, setMenu] = useState<string[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      setMenu((await getAllCategories()).data);
    };
    getCategories();
  }, []);

  return (
    <List>
      {menu.length > 0 ? (
        menu.map((category, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link to={`/category/${category}`}>{category}</Link>
            </ListItemButton>
          </ListItem>
        ))
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </List>
  );
};
