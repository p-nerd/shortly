import { toast as reactToast } from "react-toastify";

const toast = {
    success: (message: string) => reactToast.success(message),
    error: (message: string) => reactToast.error(message),
};

export default toast;
