import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({

    reducer : rootReducer,
    middleware : getDefaultMiddelware => {
        return getDefaultMiddelware({
            serializableCheck : false
        })
    },
    devTools : true

})

export default store