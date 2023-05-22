import * as React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/image/logo.png'
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
    const handleCloseMenu = () => {
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
                <div className="header-button">
                    {!walletAddress ? (
                        <MyButton
                            className="text-nowrap px-3"
                            onClick={() => {
                                // web3WalletNow.getSatWallet()
                                // web3WalletNow.changeSatNetwork()
                                // web3WalletNow.getSatBalance()

                                web3WalletNow.getWalletAddress(1);
                                web3WalletNow.getSatInscriptions();
                            }}>
                            Connect Wallet
                        </MyButton>
                    ) : (
                        <div className="text-white cursor-pointer" onClick={handleClick}>
                            {showWalletAddress}
                        </div>
                    )}
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleCloseMenu}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button'
                        }}>
                        <MenuItem
                            onClick={() => {
                                web3WalletNow.setWalletLoginLogout()
                                handleCloseMenu()
                            }}>
                            Disconnect
                        </MenuItem>
                    </Menu>
                </div>
            </header>
        </div>
    )
}
