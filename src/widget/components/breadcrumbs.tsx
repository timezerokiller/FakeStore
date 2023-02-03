import { Fragment } from "react"
import { Link, useMatches } from "react-router-dom"

import MuiBreadcrumbs from "@mui/material/Breadcrumbs"
import Stack from "@mui/material/Stack"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

type Props = {
    text?: string
    id?: number | string
}
let crumbs

export const Breadcrumbs = (props: Props) => {
    let matches = useMatches()
    if (props.text && props.id) {
        crumbs = matches.map((match: any) => match!.handle?.crumb(props.text, props.id))

        return (
            <Stack spacing={2}>
                <MuiBreadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {crumbs.map((crumb, index) => (
                        <Link key={index} to={crumb.props.to}>
                            {crumb.props.children}
                        </Link>
                    ))}
                </MuiBreadcrumbs>
            </Stack>
        )
    }

    return <></>
}
