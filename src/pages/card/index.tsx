import { MouseEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { useAppDispatch } from "shared/hooks/redux/useAppDispatch"
import { useAppSelector } from "shared/hooks/redux/useAppSelector"

import Container from "@mui/material/Container"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import DeleteIcon from "@mui/icons-material/Delete"
import { Button } from "@mui/material"

import { PRODUCT_URL } from "shared/constants"
import { removeProductInCard } from "services/slice/shop"
import { useSnackbar } from "notistack"

export const CardPage = () => {
    const card = useAppSelector((state) => state.shop.card)
    const dispatch = useAppDispatch()
    const { enqueueSnackbar } = useSnackbar()

    const handleClickRemoveProduct = (
        event: MouseEvent<HTMLButtonElement>,
        productId: number,
        productTitle: string
    ) => {
        event.preventDefault()
        dispatch(removeProductInCard(productId))
        enqueueSnackbar(`Товар ${productTitle} удален из корзины`, { variant: "warning" })
    }

    return (
        <Container>
            <h1>CardPage</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Image(g)</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {card.map((product, index) => (
                            <TableRow
                                key={index}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link to={`${PRODUCT_URL}/${product.id}`}>{product.title}</Link>
                                </TableCell>
                                <TableCell align="right">{product.category}</TableCell>
                                <TableCell align="right">
                                    <img height={150} src={product.image} />
                                </TableCell>
                                <TableCell align="right">{product.price}$</TableCell>
                                <TableCell align="right">{product.quantity}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        onClick={(event) => {
                                            handleClickRemoveProduct(
                                                event,
                                                product.id,
                                                product.title
                                            )
                                        }}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
