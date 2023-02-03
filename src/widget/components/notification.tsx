import * as React from "react"
import Stack from "@mui/material/Stack"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const enum EnumSeverity {
    error = "error",
    warning = "warning",
    info = "info",
    success = "success",
}

type props = {
    severity?: EnumSeverity
    text: string
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const autoHideDurationTime = 3000

export const Notification = (props: props) => {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return
        }
        props.setOpen(false)
    }

    return (
        <Stack spacing={2} sx={{ width: "100%" }}>
            {props.severity == EnumSeverity.success && (
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={props.open}
                    autoHideDuration={autoHideDurationTime}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity={EnumSeverity.success}
                        sx={{ width: "100%" }}
                    >
                        {props.text}
                    </Alert>
                </Snackbar>
            )}
            {props.severity == EnumSeverity.error && (
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={props.open}
                    autoHideDuration={autoHideDurationTime}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity={EnumSeverity.error}
                        sx={{ width: "100%" }}
                    >
                        {props.text}
                    </Alert>
                </Snackbar>
            )}
            {props.severity == EnumSeverity.info && (
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={props.open}
                    autoHideDuration={autoHideDurationTime}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity={EnumSeverity.info}
                        sx={{ width: "100%" }}
                    >
                        {props.text}
                    </Alert>
                </Snackbar>
            )}
            {props.severity == EnumSeverity.warning && (
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={props.open}
                    autoHideDuration={autoHideDurationTime}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity={EnumSeverity.warning}
                        sx={{ width: "100%" }}
                    >
                        {props.text}
                    </Alert>
                </Snackbar>
            )}
        </Stack>
    )
}