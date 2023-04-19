import authSlice from "@features/auth/authSlice";
import headerSlice from "@features/layouts/headerSlice";
import modalSlice from "@features/layouts/modalSlice";
import rightDrawerSlice from "@features/layouts/rightDrawerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        header: headerSlice.reducer,
        rightDrawer: rightDrawerSlice.reducer,
        modal: modalSlice.reducer,
        auth: authSlice.reducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
