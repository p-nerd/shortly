import headerSlice from "@features/common/headerSlice";
import modalSlice from "@features/common/modalSlice";
import rightDrawerSlice from "@features/common/rightDrawerSlice";
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
