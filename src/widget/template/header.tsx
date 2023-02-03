import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { Badges } from "widget/components/badge"
import { drawerWidth } from "."
import { useAppSelector } from "shared/hooks/redux/useAppSelector"
import { Link } from "react-router-dom"

type Props = {
    handleDrawerToggle: () => void
}

export const Header = ({ handleDrawerToggle }: Props) => {
    const card = useAppSelector((state) => state.shop.card)

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: " space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h6" noWrap component="div">
                        Магазин демо
                    </Typography>
                    <Box sx={{ display: { md: "flex" } }}>
                        <Link to={"/card"}>
                            <Badges
                                icon={<ShoppingCartIcon sx={{ color: "white" }} />}
                                count={card.length}
                                max={99}
                            />
                        </Link>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
