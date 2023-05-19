// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react'

let tvScriptLoadingPromise

export default function TradingViewWidget() {
    const onLoadScriptRef = useRef()

    useEffect(() => {
        onLoadScriptRef.current = createWidget

        if (!tvScriptLoadingPromise) {
            tvScriptLoadingPromise = new Promise((resolve) => {
                const script = document.createElement('script')
                script.id = 'tradingview-widget-loading-script'
                script.src = 'https://s3.tradingview.com/tv.js'
                script.type = 'text/javascript'
                script.onload = resolve

                document.head.appendChild(script)
            })
        }

        tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current())

        return () => (onLoadScriptRef.current = null)

        function createWidget() {
            if (document.getElementById('tradingview_08db8') && 'TradingView' in window) {
                new window.TradingView.widget({
                    autosize: true,
                    symbol: 'BINANCE:BTCUSDT',
                    interval: '1',
                    timezone: 'Etc/UTC',
                    theme: 'dark',
                    style: '2',
                    locale: 'en',
                    toolbar_bg: '#f1f3f6',
                    enable_publishing: false,
                    hide_legend: true,
                    save_image: false,
                    container_id: 'tradingview_08db8'
                })
            }
        }
    }, [])

    return (
        <div className="tradingview-widget-container" style={{ width: '100%', height: '100%' }}>
            <div id="tradingview_08db8" style={{ width: '100%', height: '100%' }} />
        </div>
    )
}
