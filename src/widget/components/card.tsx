import { MouseEvent, useState } from "react"
import { Link } from "react-router-dom"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import ReadMoreIcon from "@mui/icons-material/ReadMore"

import { useAppDispatch } from "shared/hooks/redux/useAppDispatch"
import { addProductInCard } from "services/slice/shop"
import { CATEGORY_URL, PRODUCT_URL } from "shared/constants"
import { IProduct } from "shared/interface/product"
import { Notification, EnumSeverity } from "./notification"

type props = {
    product: IProduct
}

export const ProductCard = (props: props) => {
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClickAddCard = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(addProductInCard(props.product))
        setOpen(true)
    }

    return (
        <Card>
            <CardMedia
                sx={{ height: 140 }}
                image={props.product.image}
                title={props.product.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleClickAddCard} size="small">
                    <AddShoppingCartIcon />
                </Button>
                <Link to={`${PRODUCT_URL}/${props.product.id}`}>
                    <Button size="small">
                        <ReadMoreIcon />
                    </Button>
                </Link>
                <Notification
                    text={`Товар ${props.product.title} добавлен в корзину`}
                    severity={EnumSeverity.success}
                    open={open}
                    setOpen={setOpen}
                />
            </CardActions>
        </Card>
    )
}
