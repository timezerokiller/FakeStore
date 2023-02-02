import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import { useGetCategories } from 'shared/hooks/useGetCategories'

export const Navbar = () => {
    const { data, isError, isLoading } = useGetCategories()

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }

    if (isError) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ color: 'red' }}>Ошибка</div>
            </Box>
        )
    }

    if (data) {
        return (
            <>
                <Link to={`/`}>
                    <ListItem disablePadding>
                        <ListItemButton>Home</ListItemButton>
                    </ListItem>
                </Link>
                {data.map((category, index) => (
                    <Link to={`/category/${category}`}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton>{category}</ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </>
        )
    } else {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ color: 'red' }}>Список категорий пуст</div>
            </Box>
        )
    }
}
