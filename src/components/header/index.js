import * as React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/image/logo.png'
import unisat from '@/assets/image/unisat.png'
import okx from '@/assets/image/okx.png'
import { MyButton } from '@/components/mui-components/index.js'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import './index.scss'
import web3Wallet from '@/utils/web3-wallet.js'

export default function PrimarySearchAppBar() {
    const navigate = useNavigate()
    let menuList = [
        {
            title: 'Mint',
            path: 'mint'
        },
        {
            title: 'About',
            path: 'about'
        },
        {
            title: 'Economics',
            path: 'economics'
        },
        {
            title: 'Earn',
            path: '/earn'
        },
        {
            title: 'Staking',
            path: '/staking'
        }
    ]
    const walletAddress = useSelector((state) => state.persist.walletAddress)
    const showWalletAddress = useSelector((state) => state.persist.showWalletAddress)

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const web3WalletNow = new web3Wallet();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseMenu = async (item=0) => {
        let accounts = await web3WalletNow.getWalletAddress(item)
        console.log("handleCloseMenu : " + accounts)
        setAnchorEl(null)
    }
    return (
        <div>
            <header className="header-box webkit-scrollbar-none pb-0">
                <div className="logo-box d-flex-center">
                    <img
                        className="me-3"
                        style={{
                            width: 42
                        }}
                        src={logo}
                        alt=""
                    />
                    <p>POPOSAT</p>
                </div>
                <div className="header-button ">
                    <div className="d-flex-center me-5">
                        <a href="/" target="_blank" rel="noreferrer">
                            <i className="iconfont icon-twitter-fill text-white fs-3 mx-3"></i>
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <i className="iconfont icon-discord text-white fs-3 mx-3"></i>
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <i className="iconfont icon-medium text-white fs-3 mx-3"></i>
                        </a>
                    </div>
                    {!walletAddress ? (
                        <div className="position-relative">
                            <MyButton className="text-nowrap px-3" onClick={handleClick}>
                                Connect Wallet
                            </MyButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleCloseMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button'
                                }}
                                sx={{
                                    '.MuiMenu-paper': {
                                        width: 180
                                    }
                                }}>
                                <MenuItem
                                    onClick={() => {
                                        handleCloseMenu(1)
                                    }}>
                                    <img src={unisat} style={{ width: 26 }} alt="" />
                                    <span className="ms-3 text-00ff00">Unisat</span>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        handleCloseMenu()
                                    }}>
                                    <img src={okx} style={{ width: 26 }} alt="" />
                                    <span className="ms-3 text-00ff00">OKX Wallet</span>
                                </MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <div className="text-white cursor-pointer" onClick={handleClick}>
                            {showWalletAddress}
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}