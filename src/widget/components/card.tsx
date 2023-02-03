import { MouseEvent } from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import { IProduct } from '../../shared/interface/product'

type props = {
    product: IProduct
}

export const ProductCard = (props: props) => {
    const handleClickAddCard = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
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
                <Button size="small">
                    <AddShoppingCartIcon />
                </Button>
            </CardActions>
        </Card>
    )
}
