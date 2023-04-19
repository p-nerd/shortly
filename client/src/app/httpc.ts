import axios from "axios";
import Response from "./response";

const httpc = {
    post: async (url: string, data: object): Promise<Response> => {
        try {
            const response = await axios({ method: "post", url, data });
            return { body: response.data, status: response.status };
        } catch (e: any) {
            return { body: e.response.data, status: e.response.status };
        }
    },
};

export default httpc;
