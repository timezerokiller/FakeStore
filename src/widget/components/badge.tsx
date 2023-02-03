import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'

function notificationsLabel(count: number, max: number) {
    if (count > max) {
        return 'more than 99 notifications'
    }
}

type Props = {
    icon: React.ReactNode
    count: number
    max: number
}

export const Badges = (props: Props) => {
    return (
        <IconButton aria-label={notificationsLabel(props.count, props.max)}>
            <Badge badgeContent={props.count} max={props.max} color="secondary">
                {props.icon}
            </Badge>
        </IconButton>
    )
}
