import * as React from 'react'
import { store } from '@/store/index.js'
import { setRadarShow } from '@/store/store.js'

export default function Footer() {
    const handleClick = () => {
        store.dispatch(setRadarShow())
    }
    return (
        <>
            <div
                className="d-flex-center"
                style={{
                    background: '#00FF00',
                    color: '#000',
                    width: '100%',
                    minWidth: 1280
                }}>
                <footer
                    className="d-flex-between-center"
                    style={{
                        height: 30,
                        color: '#000',
                        width: '100%',
                        maxWidth: 2160,
                        minWidth: 1280,
                        padding: '20px 40px'
                    }}>
                    <span className="d-flex-between-center cursor-pointer" onClick={handleClick}>
                        <i className="iconfont icon-caidan fs-5 me-2"></i> start
                    </span>
                    <span>Powered By POPOSLabs</span>
                </footer>
            </div>
        </>
    )
}
