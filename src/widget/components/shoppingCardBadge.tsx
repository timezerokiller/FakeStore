import * as React from "react"
import IconButton from "@mui/material/IconButton"
import Badge from "@mui/material/Badge"
import { useAppSelector } from "shared/hooks/redux/useAppSelector"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

type Props = {
    icon: React.ReactNode
    count: number
    max: number
}

export const ShoppingCardBadge = () => {
    const card = useAppSelector((state) => state.shop.card)

    return (
        <IconButton>
            <Badge badgeContent={card.length} max={99} color="secondary">
                <ShoppingCartIcon sx={{ color: "white" }} />{" "}
            </Badge>
        </IconButton>
    )
}
