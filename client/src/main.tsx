import store from "@app/store";
import SuspenseContent from "@components/layouts/SuspenseContent";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Suspense fallback={<SuspenseContent />}>
        <Provider store={store}>
            <App />
            <ToastContainer />
        </Provider>
    </Suspense>
);
