import { BASE_URL } from "@utils/env";
import axios from "axios";

const initializeApp = () => {
    // Setting base URL for all API request via axios
    axios.defaults.baseURL = BASE_URL;

    if (!import.meta.env.NODE_ENV || import.meta.env.NODE_ENV === "development") {
        // dev code
    } else {
        // Prod build code
        // init analytics here
    }
};

export default initializeApp;
