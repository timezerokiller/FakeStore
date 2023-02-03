import { useEffect, useState } from "react"

import { Link, NavLink, useParams } from "react-router-dom"

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

import { useGetCategories } from "shared/hooks/useGetCategories"
import { CATEGORY_URL } from "shared/constants"

const style = {
    textDecoration: "none",
}

type ActiveState = {
    [key: number]: boolean
}

export const Navbar = () => {
    const { data, isError, isLoading } = useGetCategories()
    const { categoryName } = useParams()

    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
            </Box>
        )
    }

    if (isError) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <div style={{ color: "red" }}>Ошибка</div>
            </Box>
        )
    }

    if (data) {
        return (
            <List>
                <NavLink to={`/`} style={style}>
                    <ListItemButton style={!categoryName ? { backgroundColor: "darkgrey" } : {}}>
                        home
                    </ListItemButton>
                </NavLink>
                {data.map((category, index) => (
                    <NavLink key={index} to={`${CATEGORY_URL}/${category}`} style={style}>
                        <ListItemButton
                            style={categoryName === category ? { backgroundColor: "darkgrey" } : {}}
                        >
                            <ListItemText primary={category} />
                        </ListItemButton>
                    </NavLink>
                ))}
            </List>
        )
    } else {
        return (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <div style={{ color: "red" }}>Список категорий пуст</div>
            </Box>
        )
    }
}
