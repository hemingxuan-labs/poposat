import * as React from 'react'
import styled from 'styled-components'
export default function PrimarySearchAppBar() {
    return (
        <div>
            <footer
                className="px-4 webkit-scrollbar-none d-flex-between-center"
                style={{ background: '#00FF00', height: 30, color: '#000' }}>
                <span>start</span>
                <span>Powered By POPOSLabs</span>
            </footer>
        </div>
    )
}
