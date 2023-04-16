import headerSlice from "@features/layouts/headerSlice";
import modalSlice from "@features/layouts/modalSlice";
import rightDrawerSlice from "@features/layouts/rightDrawerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        header: headerSlice,
        rightDrawer: rightDrawerSlice,
        modal: modalSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
