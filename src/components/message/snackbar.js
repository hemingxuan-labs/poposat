import * as React from 'react'
import { useState } from 'react'
import { Snackbar, Alert } from '@mui/material'
import styled from 'styled-components'

const MySnackbar = styled(Snackbar)`
    top: 46% !important;
    transform: translate(-50%, -50%);

    .MuiPaper-root {
        padding: 8px 24px !important;
        font-size: 20px !important;
        display: flex;
        align-items: center;
    }
    .error-close {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #000;
        border: 1px solid #ff0000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        color: #ff0000;
        position: absolute;
        top: -6px;
        right: -6px;
        cursor: pointer;
    }
`
const ErrorAlert = styled(Alert)`
    width: 100%;
    color: #000 !important;
    background-color: #ff0000 !important;
    top: 50% !important;
`

const SuccessAlert = styled(Alert)`
    color: #000 !important;
    background-color: #ff0000 !important;
`

export default function Message(props) {
    const { content, duration, type, iconShow } = props
    const [open, setOpen] = useState(true)
    // 关闭消息提示
    const handleClose = (event, reason) => {
        setOpen(false)
    }
    return (
        <>
            <MySnackbar
                open={open}
                autoHideDuration={Number(duration.toString())}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={handleClose}>
                {type.toString() === 'error' ? (
                    <div>
                        <ErrorAlert variant="filled" severity={type.toString()}>
                            {content.toString()}
                        </ErrorAlert>
                        <div className="error-close" onClick={handleClose}>
                            <i className="iconfont icon-close"></i>
                        </div>
                    </div>
                ) : (
                    <SuccessAlert variant="filled" severity={type.toString()}>
                        {content.toString()}
                    </SuccessAlert>
                )}
            </MySnackbar>
        </>
    )
}
