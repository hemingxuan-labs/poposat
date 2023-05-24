import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'store',
    initialState: {
        radarShow: false,
        radarShowDelay: false
    },
    reducers: {
        setRadarShow: (state, action) => {
            state.radarShow = !state.radarShow
        },
        setRadarShowDelay: (state, action) => {
            state.radarShowDelay = !state.radarShowDelay
        }
    }
})
export const { setRadarShow, setRadarShowDelay } = counterSlice.actions
export default counterSlice.reducer
