import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice({
    name: 'info',
    initialState: {
        level: null,
        counter: 0
    },
    reducers: {
        setLevel(state, { payload }) {
            state.level = payload
        },
        setCounterIncrement(state) {
            state.counter = state.counter + 1
        },
        removeGame(state) {
            state.level = null
            state.counter = 0
        }
    }
})

export const { setLevel, setCounterIncrement, removeGame } = infoSlice.actions
export default infoSlice.reducer