import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'persist',
    initialState: {
        walletAddress: '',
        showWalletAddress: ''
    },
    reducers: {
        setWalletAddress: (state, action) => {
            state.walletAddress = action.payload
            state.showWalletAddress = `${action.payload.slice(0, 6)}...${action.payload.slice(
                action.payload.length - 4,
                action.payload.length
            )}`
        },
        setWalletLoginLogoutState: (state, action) => {
            state.walletAddress = ''
            state.showWalletAddress = ''
        }
    }
})
export const { setWalletAddress, setWalletLoginLogoutState } = counterSlice.actions
export default counterSlice.reducer
