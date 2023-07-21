import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import home1 from '@/assets/image/home1.png'
import circle from '@/assets/image/circle.png'
import Typewriter from '@/components/typewriter'
import message from '@/components/message'
import './index.scss'

function Home() {
    const navigate = useNavigate()
    const muneList = [
        {
            title: 'Launch',
            path: '/launch'
        },
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
    return (
        <div className="position-relative">
            <div className="position-absolute top-50 start-50 translate-middle z-3 d-flex align-items-center">
                <svg width="500" height="500" viewBox="32 32 160 160" id="grid">
                    <path d="M 110 30 l 0 30 M 115 30 l 0 30" fill="none" />
                    <path d="M 110 165 l 0 30 M 115 165 l 0 30" fill="none" />
                    <path d="M 60 115 l -30 0 M 60 110 l -30 0" fill="none" />
                    <path d="M 195 115 l -30 0 M 195 110 l -30 0" fill="none" />
                    <circle cx="112" cy="112" r="72" />
                    <circle cx="112" cy="112" r="45" />
                    <circle cx="112" cy="112" r="22" />
                    <circle cx="112" cy="112" r="20" />
                    <circle cx="112" cy="112" r="10" />
                </svg>
                <img id="radar" src={circle} alt="" />
                <code className="d-block ms-6 fs-5" style={{ color: '#05FB00', width: 380 }}>
                    <Typewriter></Typewriter>
                </code>
            </div>
            <div className="home-box d-flex flex-column gap-4 position-relative">
                <div className="d-flex gap-4" style={{ height: '40%' }}></div>

                <div className="d-flex gap-4" style={{ width: '100%', height: '60%' }}>
                    <div
                        className="position-relative d-flex justify-content-end flex-column gap-4 pb-4"
                        style={{ width: 150 }}>
                        {muneList.map((item) => (
                            <div
                                key={item.title}
                                className="market-finder-box position-relative cursor-pointer"
                                onClick={() => {
                                    if (item.title === 'Launch') {
                                        navigate(item.path)
                                        return
                                    }
                                    message.error({ content: 'Coming Soon', duration: 5000 })
                                }}>
                                <img className="d-block" src={home1} style={{ width: 85 }} alt="" />
                                <div className="market-text-box">{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
