import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'store',
    initialState: {
        radarShow: false
    },
    reducers: {
        setRadarShow: (state, action) => {
            state.radarShow = !state.radarShow
        }
    }
})
export const { setRadarShow } = counterSlice.actions
export default counterSlice.reducer
