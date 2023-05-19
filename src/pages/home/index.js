import React, { useEffect, useState } from 'react'
import home1 from '@/assets/image/home1.png'
import '@/pages/home/index.scss'
function Home() {
    return (
        <div>
            <div className="home-box d-flex flex-column gap-4">
                <div className="d-flex gap-4" style={{ height: '40%' }}>
                    <code className="d-block" style={{ color: '#05FB00', width: 350 }}>
                        {`penetrate" == typeof $.accessRequest &&
                        ($.accessRqst = 10), 
                        function(a, b,(c) {
                            function d(c){
                                    var d=b.console; f[c] || (f[c] = 10,
                                    a.migrateWarnings.push(c), 
                                    d ee d warn &e la.accessr`}
                    </code>
                    <div className="market-box p-1">
                        <div
                            className="text-center fs-6 d-flex-center"
                            style={{ height: 22, background: '#05FB00' }}>
                            Market
                        </div>
                        <div className="p-3">
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
                                    <span>USD Coin (USDC)</span>
                                    <span>0.00%</span>
                                </div>
                                <div
                                    className="d-flex-between-center fs-7 mt-2"
                                    style={{ color: '#05FB00' }}>
                                    <span>USD Coin (USDC)</span>
                                    <span>0.00%</span>
                                </div>
                                <div
                                    className="d-flex-between-center fs-7 mt-2"
                                    style={{ color: '#05FB00' }}>
                                    <span>USD Coin (USDC)</span>
                                    <span>0.00%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="market-box p-1">
                        <div
                            className="text-center fs-6 d-flex-center"
                            style={{ height: 22, background: '#05FB00' }}>
                            About
                        </div>
                        <div className="p-3">
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
                                    <span>USD Coin (USDC)</span>
                                    <span>0.00%</span>
                                </div>
                                <div
                                    className="d-flex-between-center fs-7 mt-2"
                                    style={{ color: '#05FB00' }}>
                                    <span>USD Coin (USDC)</span>
                                    <span>0.00%</span>
                                </div>
                                <div
                                    className="d-flex-between-center fs-7 mt-2"
                                    style={{ color: '#05FB00' }}>
                                    <span>USD Coin (USDC)</span>
                                    <span>0.00%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-4" style={{ width: '100%', height: '60%' }}>
                    <div
                        className="position-relative d-flex justify-content-end align-items-center a flex-column gap-4 pb-4"
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
                            <span>Swap</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column" style={{ flex: 1 }}>
                        <div className="border" style={{ height: 70 }}></div>
                        <div className="d-flex" style={{ height: 'calc(100% - 70px)' }}>
                            <div
                                style={{
                                    flex: 1,
                                    border: '3px solid #00ff00',
                                    borderRadius: 16
                                }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
