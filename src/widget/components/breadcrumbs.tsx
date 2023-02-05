import { useMatches } from "react-router-dom"

import MuiBreadcrumbs from "@mui/material/Breadcrumbs"
import Stack from "@mui/material/Stack"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

declare function useMatchesFix(): Omit<ReturnType<typeof useMatches>, "handle" | "data"> &
    {
        handle: {
            crumb: (data: number | string | [] | {}) => React.ReactNode
        }
        data: number | string | [] | {}
    }[]

export const Breadcrumbs = () => {
    let matches = useMatches() as ReturnType<typeof useMatchesFix>
    let crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => {
            return match.handle?.crumb(match.data)
        })

    return (
        <Stack spacing={2}>
            <MuiBreadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {crumbs}
            </MuiBreadcrumbs>
        </Stack>
    )

    return <></>
}
