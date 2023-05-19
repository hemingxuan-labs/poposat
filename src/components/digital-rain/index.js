import * as React from 'react'
import { useEffect, useRef } from 'react'

export default function DigitalRain() {
    // /**
    //  * [rain description]
    //  * @param  {[Element]} canvas canvas元素对象
    //  * @param  {[String]} text    掉落的字符串
    //  * @param  {[String]} symbol  分隔符
    //  * @param  {[Number]} speed   掉落速度
    //  * @return {[type]}        [description]
    //  */
    function rain(canvas, text, symbol, speed) {
        //获取屏幕可视区域大小
        let digitalRainBox = document.getElementById('DigitalRainBox')
        var clinetW = digitalRainBox.offsetWidth
        var clinetH = digitalRainBox.offsetHeight

        //设置画布大小
        var canvasThis = canvas || document.querySelector('canvas')
        canvasThis.width = clinetW
        canvasThis.height = clinetH

        var cxt = canvasThis.getContext('2d')
        var rainStr = text || 'The matrix of hackers'
        var symbolThis = symbol || ''
        var arr = rainStr.split(symbolThis)

        var fontSize = 14
        // 计算行数
        var cols = Math.floor(clinetW / fontSize)
        // 初始化Y轴坐标
        var down = []
        for (var i = 0; i < cols; i++) {
            down.push(Math.floor(Math.random() * -100))
        }

        function drawRain() {
            // 填充背景(ps:背景采用rgba,可尝试不同透明度的效果)
            cxt.fillStyle = 'rgba(0,0,0,.1)'
            cxt.fillRect(0, 0, clinetW, clinetH)

            // 设置字体颜色
            cxt.fillStyle = '#00ff00'
            for (var i = 0; i < down.length; i++) {
                var randomNum = Math.random()
                // 绘制文字
                cxt.fillText(
                    arr[Math.floor(randomNum * arr.length)],
                    i * fontSize,
                    down[i] * fontSize
                )

                if (down[i] * fontSize > clinetH && randomNum > 0.9) {
                    down[i] = 0
                }

                down[i]++
            }
        }
        var speedThis = speed || 30
        setInterval(drawRain, speedThis)
    }
    const raindrop = useRef(null)
    useEffect(() => {
        var text = 'abcdefghijklmnopqrstuvwxyz'
        rain(raindrop.current, text, '', 80)
    }, [])
    return (
        <div>
            <canvas ref={raindrop}></canvas>
        </div>
    )
}
