import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import home1 from '@/assets/image/home1.png'
import home2 from '@/assets/image/home2.png'
import home3 from '@/assets/image/home3.png'
import DigitalRain from '@/components/digital-rain'
import TradingView from '@/components/trading-view'
import { MyButton } from '@/components/mui-components/index.js'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import '@/pages/home/index.scss'

export const MyFormControl = styled(FormControl)`
    .MuiOutlinedInput-notchedOutline {
        border: 1px solid #05fb00 !important;
    }
    .Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 1px solid #05fb00 !important;
        border-color: #05fb00;
    }
    .MuiInputLabel-animated {
        color: #05fb00 !important;
    }
    .MuiFormControl-root {
        width: 150px !important;
        height: 30px !important;
    }
`
function Home() {
    const [age, setAge] = React.useState('')

    const handleChange = (event) => {
        setAge(event.target.value)
    }
    return (
        <div>
            <div className="home-box d-flex flex-column gap-4">
                <div className="d-flex gap-4" style={{ height: '40%' }}>
                    <code className="d-block" style={{ color: '#05FB00', width: 350 }}>
                        POPOSAT redefines the decentralized trading market for Brc20 tokens,
                        combined with Erc20 smart contracts, to ensure that every transaction has
                        proof. Not only Brc20, but also Orc20 and Drc20
                    </code>
                    <div className="market-box p-1 overflow-hidden">
                        <div
                            className="text-center fs-6 d-flex-center"
                            style={{ height: 22, background: '#05FB00' }}>
                            Market
                        </div>
                        <div className="p-3 overflow-hidden">
                            <div
                                className="pb-2 fs-7"
                                style={{ color: '#05FB00', borderBottom: '1px solid #05FB00' }}>
                                Top Gainers(24h)
                            </div>
                            <div className="pt-2">
                                <div
                                    className="d-flex-between-center fs-7 mt-2"
                                    style={{ color: '#05FB00' }}>
                                    <span>USD Coin (USDC)</span>
                                    <span>0.00%</span>
                                </div>
                                <div
                                    className="d-flex-between-center fs-7 mt-2"
                                    style={{ color: '#05FB00' }}>
                                    <span>Tether (USDC)</span>
                                    <span>0.00%</span>
                                </div>
                                <div
                                    className="d-flex-between-center fs-7 mt-2"
                                    style={{ color: '#05FB00' }}>
                                    <span>Gridex (GDX)</span>
                                    <span>0.00%</span>
                                </div>
                                <div
                                    className="d-flex-between-center fs-7 mt-2"
                                    style={{ color: '#05FB00' }}>
                                    <span>Wrapped BTC (WBTC)</span>
                                    <span>0.00%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="market-box p-1 overflow-hidden">
                        <div
                            className="text-center fs-6 d-flex-center"
                            style={{ height: 22, background: '#05FB00' }}>
                            About
                        </div>
                        <div id="DigitalRainBox" style={{ height: 'calc(100% - 22px)' }}>
                            <DigitalRain width="212"></DigitalRain>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-4" style={{ width: '100%', height: '60%' }}>
                    <div
                        className="position-relative d-flex justify-content-end flex-column gap-4 pb-4"
                        style={{ width: 150 }}>
                        <div className="market-finder-box position-relative">
                            <img className="d-block" src={home1} style={{ width: 85 }} alt="" />
                            <div className="market-text-box">Market</div>
                        </div>
                        <div className="market-finder-box position-relative">
                            <img className="d-block" src={home1} style={{ width: 85 }} alt="" />
                            <div className="market-text-box">Trade</div>
                        </div>
                        <div className="market-finder-box position-relative">
                            <img className="d-block" src={home1} style={{ width: 85 }} alt="" />
                            <div className="market-text-box">Swap</div>
                        </div>
                        <div className="market-finder-box position-relative">
                            <img className="d-block" src={home1} style={{ width: 85 }} alt="" />
                            <div className="market-text-box">Order</div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: 400,
                            border: '3px solid #00ff00',
                            borderRadius: 16
                        }}>
                        <div className="p-3">
                            <span className="fs-5" style={{ color: '#00ff00' }}>
                                Swap
                            </span>
                            <MyFormControl className="mt-3" fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Hybrid Router(V2+V3)
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}>
                                    <MenuItem value={10}>Hybrid Router(V2+V4)</MenuItem>
                                    <MenuItem value={20}>Hybrid Router(V2+V5)</MenuItem>
                                    <MenuItem value={30}>Hybrid Router(V2+V6)</MenuItem>
                                </Select>
                            </MyFormControl>
                            <div
                                className="mt-3"
                                style={{
                                    height: 80,
                                    borderRadius: 5,
                                    border: '1px solid #00FF00'
                                }}></div>
                            <div
                                className="mt-3"
                                style={{
                                    height: 80,
                                    borderRadius: 5,
                                    border: '1px solid #00FF00'
                                }}></div>
                            <MyButton className="text-nowrap mt-3" style={{ width: '100%' }}>
                                Enter Amount
                            </MyButton>
                        </div>
                    </div>
                    <div className="d-flex flex-column" style={{ flex: 1 }}>
                        <div className="position-relative" style={{ height: 70, top: -10 }}>
                            <img
                                className="d-block position-absolute top-50 end-0 translate-middle-y"
                                src={home2}
                                style={{ width: 300 }}
                                alt=""
                            />
                            <img
                                className="d-block position-absolute top-50 translate-middle-y"
                                src={home3}
                                style={{ height: 90, right: 330 }}
                                alt=""
                            />
                        </div>
                        <div className="d-flex" style={{ height: 'calc(100% - 70px)' }}>
                            <div
                                className="overflow-hidden"
                                style={{
                                    flex: 1,
                                    border: '3px solid #00ff00',
                                    borderRadius: 16
                                }}>
                                <TradingView></TradingView>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
