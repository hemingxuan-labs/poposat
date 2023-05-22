import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import home1 from '@/assets/image/home1.png'
import home2 from '@/assets/image/home2.png'
import home3 from '@/assets/image/home3.png'
import ordi from '@/assets/image/ordi.png'
import homebg from '@/assets/image/homebg.png'
import DigitalRain from '@/components/digital-rain'
import TradingView from '@/components/trading-view'
import Typewriter from '@/components/typewriter'
import message from '@/components/message'
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
    const muneList = [
        {
            title: 'Market',
            path: '/'
        },
        {
            title: 'Trade',
            path: '/'
        },
        {
            title: 'Swap',
            path: '/'
        },
        {
            title: 'Order',
            path: '/'
        }
    ]
    const [age, setAge] = React.useState('')
    const handleChange = (event) => {
        setAge(event.target.value)
    }
    const [market, SetMarket] = React.useState(true)
    return (
        <div>
            <img
                src={homebg}
                className="position-absolute top-50 start-50 translate-middle z-0"
                alt=""
            />
            <div className="home-box d-flex flex-column gap-4 position-relative">
                <div className="d-flex gap-4" style={{ height: '40%' }}>
                    <code className="d-block" style={{ color: '#05FB00', width: 350 }}>
                        <Typewriter></Typewriter>
                    </code>
                    <div
                        className={`market-box p-1 overflow-hidden ${
                            market ? 'opacity-100' : 'opacity-0'
                        }`}
                        onClick={() => {
                            message.error({ content: 'Coming Soon', duration: 5000 })
                        }}>
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
                        {muneList.map((item) => (
                            <div
                                className="market-finder-box position-relative cursor-pointer"
                                onClick={() => {
                                    message.error({ content: 'Coming Soon', duration: 5000 })
                                }}>
                                <img className="d-block" src={home1} style={{ width: 85 }} alt="" />
                                <div className="market-text-box">{item.title}</div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="overflow-hidden"
                        style={{
                            width: 400,
                            border: '3px solid #00ff00',
                            borderRadius: 16,
                            color: '#00ff00'
                        }}>
                        <div className="p-3">
                            <div className="d-flex-between-center">
                                <span className="fs-5">Swap</span>
                                <div>
                                    <i className="iconfont icon-shandian me-3"></i>
                                    <i className="iconfont icon-shezhi-xitongshezhi"></i>
                                </div>
                            </div>
                            <MyFormControl className="mt-3" fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Hybrid Router(V2+V3)
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Hybrid Router(V2+V3)"
                                    onChange={handleChange}>
                                    <MenuItem value={10}> Hybrid Router(V2+V3)</MenuItem>
                                    <MenuItem value={20}>Hybrid Router(V2+V5)</MenuItem>
                                    <MenuItem value={30}>Hybrid Router(V2+V6)</MenuItem>
                                </Select>
                            </MyFormControl>
                            <div
                                className="mt-3 p-2 px-3 fs-5"
                                style={{
                                    height: 84,
                                    borderRadius: 5,
                                    border: '1px solid #00FF00'
                                }}>
                                <div className="d-flex-align-center">
                                    <i className="iconfont icon-currencybtc fs-5"></i>
                                    <span className="mx-2">BTC</span>
                                    <i className="iconfont icon-arrow-down-bold"></i>
                                </div>
                                <div className="d-flex-between-center fs-6 mt-2">
                                    <span>2.0</span>
                                    <div className="d-flex-align-center">
                                        <i className="iconfont icon-qianbao"></i>
                                        <span className="fs-5 mx-1">0</span>
                                        <span className="fs-8">btc</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-3 p-2 px-3 fs-5"
                                style={{
                                    height: 84,
                                    borderRadius: 5,
                                    border: '1px solid #00FF00'
                                }}>
                                <div className="d-flex-align-center">
                                    <img
                                        src={ordi}
                                        style={{
                                            width: 20
                                        }}
                                        alt=""
                                    />
                                    <span className="mx-2">ORDI</span>
                                    <i className="iconfont icon-arrow-down-bold"></i>
                                </div>
                                <div className="d-flex-between-center fs-6 mt-2">
                                    <span>2.0</span>
                                    <div className="d-flex-align-center">
                                        <i className="iconfont icon-qianbao"></i>
                                        <span className="fs-5 mx-1">0</span>
                                        <span className="fs-8">ordi</span>
                                    </div>
                                </div>
                            </div>
                            <MyButton
                                className="text-nowrap mt-3"
                                style={{ width: '100%' }}
                                onClick={() => {
                                    message.error({ content: 'Coming Soon', duration: 5000 })
                                }}>
                                Enter Amount
                            </MyButton>
                        </div>
                    </div>
                    <div className="d-flex flex-column text-00ff00" style={{ flex: 1 }}>
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
                                onClick={() => {
                                    message.error({ content: 'Coming Soon', duration: 5000 })
                                }}
                                style={{
                                    flex: 1,
                                    border: '3px solid #00ff00',
                                    borderRadius: 16
                                }}>
                                <div className="fs-5 py-1 px-3">Trade</div>
                                <div style={{ height: 'calc(100% - 38px)' }}>
                                    <TradingView></TradingView>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
