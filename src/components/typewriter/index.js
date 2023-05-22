import React, { useEffect, useState } from 'react'
export default function Typewriter(params) {
    const scriptsText =
        'POPOSAT redefines the decentralized trading market for Brc20 tokens, combined with Erc20 smart contracts, to ensure that every transaction has proof. Not only Brc20, but also Orc20 and Drc20.'
    const scriptsTextArr = scriptsText.split('')
    const cursorList = ['-', '\\', '|', '/', '-']
    const [scriptsTextShow, SetScriptsTextShow] = useState('')
    const [scriptsTextIndex, SetScriptsTextIndex] = useState(0)

    const [cursorShow, setCursorShow] = useState('-')
    const [cursorShowIndex, setCursorShowIndex] = useState(0)

    useEffect(() => {
        let id
        function onSetTimeout() {
            id = setTimeout(() => {
                if (scriptsTextIndex >= scriptsTextArr.length) {
                    setTimeout(() => {
                        SetScriptsTextIndex(0)
                        SetScriptsTextShow('')
                    }, 15000)
                    return
                }
                SetScriptsTextIndex((x) => x + 1)
                return SetScriptsTextShow((x) => `${x}${scriptsTextArr[scriptsTextIndex]}`)
            }, 60)
        }
        onSetTimeout()
        return () => clearTimeout(id)
        // eslint-disable-next-line
    }, [scriptsTextShow])

    useEffect(() => {
        let id2
        function onSetTimeouts() {
            id2 = setTimeout(() => {
                if (cursorShowIndex >= cursorList.length - 1) {
                    setCursorShowIndex(0)
                }
                setCursorShowIndex((x) => x + 1)
                return setCursorShow(cursorList[cursorShowIndex])
            }, 200)
        }
        onSetTimeouts()
        return () => clearTimeout(id2)
        // eslint-disable-next-line
    }, [cursorShowIndex])
    return (
        <div>
            {scriptsTextShow}
            <span className="text-white">{cursorShow}</span>
        </div>
    )
}
