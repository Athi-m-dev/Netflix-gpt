import { createSlice } from "@reduxjs/toolkit";
const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleGptSearch : (state) => {
            console.log('toggleGptSearch reducer called');
            console.log('Previous state:', state.showGptSearch);
            state.showGptSearch = !state.showGptSearch;
            console.log('New state:', state.showGptSearch);
        }
    }
})

export const {toggleGptSearch} = GptSlice.actions;
export default GptSlice.reducer;