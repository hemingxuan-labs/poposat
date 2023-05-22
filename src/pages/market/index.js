import React from 'react'

function Market() {
    const marketList = [
        {
            title: 'Ethereum',
            abbreviation: 'ETH',
            price: '1876.71',
            CHG: '-2.22',
            VOL: '327.4'
        },
        {
            title: 'Ethereum',
            abbreviation: 'ETH',
            price: '1876.71',
            CHG: '-2.22',
            VOL: '327.4'
        },
        {
            title: 'Ethereum',
            abbreviation: 'ETH',
            price: '1876.71',
            CHG: '-2.22',
            VOL: '327.4'
        },
        {
            title: 'Ethereum',
            abbreviation: 'ETH',
            price: '1876.71',
            CHG: '-2.22',
            VOL: '327.4'
        },
        {
            title: 'Ethereum',
            abbreviation: 'ETH',
            price: '1876.71',
            CHG: '-2.22',
            VOL: '327.4'
        },
        {
            title: 'Ethereum',
            abbreviation: 'ETH',
            price: '1876.71',
            CHG: '-2.22',
            VOL: '327.4'
        }
    ]
    return (
        <div>
            <div className="pb-5">
                <div className="container-xl mt-6 px-4">
                    <h1 className="text-white" style={{ 'font-weight': 600, 'font-size': 50 }}>
                        re <span>DeFi</span> ning exchanges.
                    </h1>
                    <p className="fs-6 mt-3" style={{ color: 'rgb(139, 145, 157)' }}>
                        Needex aggregates Order Books and AMMs, providing a revolutionary on-chain
                        trading experience.
                    </p>
                </div>
                <div className="container-xl mt-6 px-4">
                    <div className="text-white fs-5">
                        Top Volume <span style={{ color: 'rgb(139, 145, 157)' }}>(24h)</span>
                    </div>
                    <hr className="mb-0" />
                </div>
                <div className="container-xl d-flex-between-center px-4">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
                        {marketList.map((item) => (
                            <>
                                <div className="col d-flex-center mt-5">
                                    <div className="ethereum-box">
                                        <div className="d-flex-align-center">
                                            <img
                                                src="https://storage.googleapis.com/needex/image/ethico.png"
                                                style={{ width: 40, height: 40 }}
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <p className="fs-5">Ethereum</p>
                                                <p
                                                    className="fs-6"
                                                    style={{ color: 'rgb(139, 145, 157)' }}>
                                                    ETH
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex-between-center mt-3">
                                            <span className="fs-4 text-white">${item.price}</span>
                                            <div>
                                                <p className="fs-8">
                                                    CHG{' '}
                                                    <span style={{ color: 'rgb(139, 145, 157)' }}>
                                                        {item.CHG}%
                                                    </span>
                                                </p>
                                                <p className="fs-8">
                                                    VOL{' '}
                                                    <span className="text-white">${item.VOL}M</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

                <div className="container-xl mt-6 px-4">
                    <div className="text-white fs-5">
                        Top Gainers <span style={{ color: 'rgb(139, 145, 157)' }}>(24h)</span>
                    </div>
                    <hr className="mb-0" />
                </div>
                <div className="container-xl px-4 d-flex-between-center">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
                        {marketList.map((item) => (
                            <>
                                <div
                                    className="markt-item col d-flex-center mt-5"
                                    v-for="item in marketList">
                                    <div className="ethereum-box cursor-pointer">
                                        <div className="d-flex-align-center">
                                            <img
                                                src="https://storage.googleapis.com/needex/image/ethico.png"
                                                style={{ width: 40, height: 40 }}
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <p className="fs-5">Ethereum</p>
                                                <p
                                                    className="fs-6"
                                                    style={{ color: 'rgb(139, 145, 157)' }}>
                                                    ETH
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex-between-center mt-3">
                                            <span className="fs-4 text-white">${item.price}</span>
                                            <div>
                                                <p className="fs-8">
                                                    CHG{' '}
                                                    <span style={{ color: 'rgb(139, 145, 157)' }}>
                                                        {item.CHG}%
                                                    </span>
                                                </p>
                                                <p className="fs-8">
                                                    VOL{' '}
                                                    <span className="text-white">${item.VOL}M</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

                <div className="container-xl px-4 mt-6">
                    <div className="text-white fs-5">Top Pairs</div>
                    <hr className="mb-0" />
                </div>
                <div className="container-xl px-4 mt-4 mx-auto webkit-scrollbar-none"></div>
            </div>
        </div>
    )
}

export default Market
