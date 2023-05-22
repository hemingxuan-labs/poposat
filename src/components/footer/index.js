import * as React from 'react'
import styled from 'styled-components'
export default function PrimarySearchAppBar() {
    return (
        <div>
            <footer
                className="webkit-scrollbar-none d-flex-between-center"
                style={{
                    background: '#00FF00',
                    height: 30,
                    color: '#000',
                    maxWidth: 2160,
                    minWidth: 1280,
                    padding: '20px 40px'
                }}>
                <span className="d-flex-between-center">
                    <i className="iconfont icon-caidan fs-5 me-2"></i> start
                </span>
                <span>Powered By POPOSLabs</span>
            </footer>
        </div>
    )
}
