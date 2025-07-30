import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./MovieSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer
    },
    reducer : {
        movie : movieReducer
    }
});

export default appStore;