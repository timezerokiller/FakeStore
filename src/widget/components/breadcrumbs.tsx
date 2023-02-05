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
        crumbs = matches.map((match) => {
            return []
        })

        return (
            <Stack spacing={2}>
                <MuiBreadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {crumbs.map((crumb, index) => (
                        <div key={index}>{crumb}</div>
                    ))}
                </MuiBreadcrumbs>
            </Stack>
        )
    }

    return <></>
}
