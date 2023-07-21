import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MyButton } from '@/components/mui-components/index.js'
import CheckIcon from '@mui/icons-material/Check'
import { poposatUserGetWhiteList } from '@/api/index.js'
import './index.scss'
function Launch() {
    let schedule = 80
    let linearProgresList = []
    for (let index = 0; index < 40; index++) {
        if (index * 2.5 >= schedule) {
            linearProgresList.push(0)
        } else {
            linearProgresList.push(1)
        }
    }
    const walletAddress = useSelector((state) => state.persist.walletAddress)
    useEffect(() => {
        async function getPoposatUserGetWhiteList() {
            const res = await poposatUserGetWhiteList()
            console.log(res, 'ssssss')
        }
        getPoposatUserGetWhiteList()
    }, [])
    return (
        <div className="launch-box">
            <div className="launch-titile fs-1 text-00ff00 text-center pt-5">
                <span style={{ color: '#FF0000' }}>POPOSAT </span>
                PUBLIC DONATION
            </div>
            <div className="container mt-4 d-flex-center">
                <span className="text-00ff00">Progerss</span>
                <div className="d-flex mx-3" style={{ gap: 7 }}>
                    {linearProgresList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    width: 14,
                                    height: 14,
                                    backgroundColor: item === 1 ? '#00FF00' : '#003300'
                                }}></div>
                        )
                    })}
                </div>
                <span className="text-00ff00">80.23%</span>
            </div>
            <div className="p-3 mt-5" style={{ border: '4px solid #00ff00', borderRadius: 10 }}>
                <div className="d-flex-between-center">
                    <div className="d-flex-align-center" style={{ width: 600 }}>
                        <span className="fs-6 text-00ff00">Adderss:</span>
                        <div className="input-text flex-fill">{walletAddress}</div>
                    </div>
                    <MyButton className="px-4">Connect Wallet</MyButton>
                </div>
                <div className="d-flex-between-center mt-3">
                    <div className="d-flex-align-center" style={{ width: 600 }}>
                        <span className="fs-6 text-00ff00">Twitter Handle:</span>
                        <div className="input-text flex-fill">@poposat20</div>
                    </div>
                    <MyButton className="px-4">Connect Wallet</MyButton>
                </div>
                <div className="d-flex-between-center mt-3">
                    <div className="d-flex-align-center" style={{ width: 600 }}>
                        <span className="fs-6 text-00ff00">Your Code:</span>
                        <div className="input-text flex-fill">
                            @#poposat eif09e0fx03fae0d0fe0slfesa7fes32dfe
                        </div>
                    </div>
                    <MyButton className="px-4">Copy Code</MyButton>
                </div>
                <div
                    className="d-flex-between-center text-00ff00 pt-4 mt-4"
                    style={{ borderTop: '1px solid #00ff00' }}>
                    <p>Quests:</p>
                    <MyButton className="px-4">submit</MyButton>
                </div>
                <div>
                    <p className="text-white fs-8 mt-2">1.Follow on @poposat20 Twitter;</p>
                    <p className="text-white fs-8 mt-2">2.Like the pinned Tweet;</p>
                    <p className="text-white fs-8 mt-2">
                        3. Quote your code retweet the pinned tweet.
                    </p>
                </div>
            </div>

            <div
                className="p-4 pb-6 mt-5"
                style={{ border: '4px solid #00ff00', borderRadius: 10 }}>
                <div className="d-flex-between-center mb-4">
                    <span className="text-00ff00">Whitelist Address:</span>
                    <span className="text-00ff00">Status</span>
                </div>
                <div
                    className="d-flex-between-center text-00ff00 px-4 mt-3"
                    style={{
                        backgroundColor: 'rgba(0, 255, 0, 0.13)',
                        height: 40,
                        borderRadius: 6
                    }}>
                    <div>bc1pr29e************************ks82fglu</div>
                    <div className="d-flex-center">
                        Successful
                        <CheckIcon className="ms-2"></CheckIcon>
                    </div>
                </div>
                <div
                    className="d-flex-between-center text-00ff00 px-4 mt-3"
                    style={{
                        backgroundColor: 'rgba(0, 255, 0, 0.13)',
                        height: 40,
                        borderRadius: 6
                    }}>
                    <div>bc1pr29e************************ks82fglu</div>
                    <div className="d-flex-center">
                        Successful
                        <CheckIcon className="ms-2"></CheckIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Launch
