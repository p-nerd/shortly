import httpc from "@app/httpc";

const authService = {
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
