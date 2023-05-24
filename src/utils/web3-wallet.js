import { store } from '@/store/index.js'
import message from '@/components/message'
import { setWalletAddress, setWalletLoginLogoutState } from '@/store/persist.js'
import { userDoLong } from '@/api/index.js'
export default class web3Wallet {
    constructor() {
        // 单例模式
        if (!web3Wallet.instance) {
            web3Wallet.instance = this
            this.getProviderSigner()
            this.accountsChanged()
        }
        return web3Wallet.instance
    }
    getProviderSigner() {
        try {
            this.provider = new ethers.providers.Web3Provider(window.ethereum)
            this.signer = this.provider.getSigner()
        } catch (error) {
            return false
        }
    }

    async accountsChanged() {
        // 监听切链操作 & 切换钱包
        if (window.ethereum) {
            ethereum.on('chainChanged', (chainId) => {
                console.log(chainId, 'chainChanged')
            })
            ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length === 0) {
                    // 登出
                    this.setWalletLoginLogout()
                } else {
                    // 切换钱包
                    this.modifyWalletAddress(accounts[0])
                }
            })
        }
    }

    async getWalletAddress(walletId = 0) {
        // 返回钱包地址 建立连接
        try {
            const accounts = walletId === 0 ? await this.getOKXWallet() : await this.getSatWallet()
            this.modifyWalletAddress(accounts[0], walletId)
            return accounts[0]
        } catch (error) {
            return false
        }
    }

    async requestSignature() {
        // 请求钱包签名
        let walletAddress = await this.getWalletAddress()
        if (!walletAddress) return
        if (store.getState().wallet.walletToken) return
        try {
            let signature = await this.signer.signMessage('POPOS')
            this.setWalletToken(signature)
            return {
                address: walletAddress,
                signature
            }
        } catch (error) {
            this.messageError(error.message)
            return false
        }
    }

    async switchChain() {
        // 切换网络
        // this.switchOrAddChain({
        //     chainId: '0xa4b1',
        //     chainName: 'Arbitrum One',
        //     name: 'ETH', // 本地货币名称
        //     symbol: 'ETH', // 本地货币符号
        //     decimals: 18,
        //     blockExplorerUrls: ['https://arbiscan.io'],
        //     rpcUrls: ['https://arb1.arbitrum.io/rpc']
        // })
        await this.switchOrAddChain({
            chainId: '0x5',
            chainName: 'Goerli',
            name: 'ETH', // 本地货币名称
            symbol: 'ETH', // 本地货币符号
            decimals: 18,
            blockExplorerUrls: ['https://goerli.etherscan.io'],
            rpcUrls: ['https://rpc.ankr.com/eth_goerli']
        })
    }

    async switchOrAddChain(chainObject) {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: chainObject.chainId }]
            })
            return true
        } catch (e) {
            if (e.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: chainObject.chainId,
                                chainName: chainObject.chainName,
                                nativeCurrency: {
                                    name: chainObject.name,
                                    symbol: chainObject.symbol, // 2-6 characters long
                                    decimals: chainObject.decimals
                                },
                                rpcUrls: chainObject.rpcUrls,
                                blockExplorerUrls: chainObject.blockExplorerUrls
                            }
                        ]
                    })
                } catch (addError) {
                    this.messageError(addError.message)
                    return false
                }
            }
            if (e.code === 4001) {
                this.messageError(e.message)
                return false
            }
        }
    }

    async getSatWallet() {
        if (typeof window.unisat == 'undefined') {
            this.messageError('UniSat Wallet is not installed!')
        } else {
            try {
                let accounts = await window.unisat.requestAccounts()
                return accounts
            } catch (e) {
                this.messageError(error.message)
            }
        }
    }

    async changeSatNetwork(prod = 0) {
        try {
            let res
            if (prod) {
                res = await window.unisat.switchNetwork('livenet')
            } else {
                res = await window.unisat.switchNetwork('testnet')
            }
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    async getSatBalance() {
        let res = await window.unisat.getBalance()
        console.log(res)
    }

    async sendBitcoin(toAddress, satoshis, options) {
        try {
            if (toAddress != null && satoshis > 0) {
                let txid = await window.unisat.sendBitcoin(toAddress, satoshis, options)
                console.log(txid)
            } else {
                console.log('Invalid params')
            }
        } catch (e) {
            console.log(e)
        }
    }

    async getSatInscriptions() {
        try {
            let res = await window.unisat.getInscriptions()
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    async sendInscription(address, inscriptionId, options) {
        try {
            if (toAddress != null && inscriptionId != null) {
                let { txid } = await window.unisat.sendInscription(address, inscriptionId, options)
                console.log(txid)
            } else {
                console.log('Invalid params')
            }
        } catch (e) {
            console.log(e)
        }
    }

    async getOKXWallet() {
        if (typeof window.okxwallet == 'undefined') {
            this.messageError('OKX Wallet Not Installed')
        } else {
            try {
                let accounts = await window.okxwallet.request({ method: 'eth_requestAccounts' })
                return accounts
            } catch (error) {
                this.messageError(error.message)
            }
        }
    }
    async modifyWalletAddress(address, walletId) {
        store.dispatch(setWalletAddress(address))
        await userDoLong({ address, nikeName: walletId === 0 ? 'okx' : 'unisat' })
    }
    setWalletToken(signature) {
        store.dispatch(setWalletToken(signature))
    }
    setWalletLoginLogout() {
        store.dispatch(setWalletLoginLogoutState())
    }
    setAssetsChina(china) {
        // store.dispatch(setWalletToken(china))
    }
    messageError(error) {
        message.error({ content: error, duration: 5000 })
    }
}
