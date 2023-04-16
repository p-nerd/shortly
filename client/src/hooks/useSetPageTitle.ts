import { useAppDispatch } from "@app/hooks";
import { setPageTitle } from "@features/layouts/headerSlice";
import { useEffect } from "react";

const useSetPageTitle = (title: string) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title }));
    }, []);
};

export default useSetPageTitle;
