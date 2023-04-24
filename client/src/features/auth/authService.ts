import httpc from "@app/httpc";

const authService = {
    login: async (email: string, password: string) => {
        const { body, status } = await httpc.post("/auth/login", { email, password });
        if (status === 401) {
            throw body.message;
        }
        if (status !== 200) {
            throw body.message;
        }
        return { accessToken: body.tokens.access.token as string, body };
    },
    register: async (email: string, password: string, name: string) => {
        const { body, status } = await httpc.post("/auth/register", {
            email,
            password,
            name,
        });
        if (status === 400) {
            throw body.message;
        }
        if (status !== 201) {
            throw body.message;
        }
        return { accessToken: body.tokens.access.token as string, body };
    },
    forgotPassword: async (email: string) => {
        const { body, status } = await httpc.post("/auth/forgot-password", { email });
        if (status === 404) {
            throw body.message;
        }
        if (status !== 204) {
            throw body.message;
        }
    },
    resetPassword: async (password: string, token: string) => {
        const { body, status } = await httpc.post(`/auth/reset-password?token=${token}`, {
            password,
        });
        if (status === 401) {
            throw body.message;
        }
        if (status !== 204) {
            throw body.message;
        }
    },
};

export default authService;
