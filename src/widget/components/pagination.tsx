import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

type Props = {
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    count: number
}

export const BasicPagination = (props: Props) => {
    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        event.preventDefault()
        props.setPage(newPage)
    }

    return (
        <Stack spacing={2}>
            <Pagination count={props.count} page={props.page} onChange={handleChangePage} />
        </Stack>
    )
}
