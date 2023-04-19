import axios from "axios";

const checkAuth = () => {
    /*  Getting token value stored in localStorage, if token is not present we will open login page 
    for all internal dashboard routes  */
    const authString = localStorage.getItem("auth");
    // if (!authString) {
    //     window.location.href = "/login";
    //     return;
    // }
    const PUBLIC_ROUTES = ["login", "forgot-password", "register", "reset-password"];
    const isPublicPage = PUBLIC_ROUTES.some(r => window.location.href.includes(r));

    if (!authString && !isPublicPage) {
        window.location.href = "/login";
        return;
    }
    if (!authString) return;
    try {
        const auth = JSON.parse(authString);
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${auth.tokens.access.token}`;

        axios.interceptors.request.use(
            config => {
                // UPDATE: Add this code to show global loading indicator
                document.body.classList.add("loading-indicator");
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        axios.interceptors.response.use(
            response => {
                // UPDATE: Add this code to hide global loading indicator
                document.body.classList.remove("loading-indicator");
                return response;
            },
            error => {
                document.body.classList.remove("loading-indicator");
                return Promise.reject(error);
            }
        );
        return auth;
    } catch (e: any) {
        return;
    }
};

export default checkAuth;
