import bcrypt from "bcryptjs";

const crypto = {
    hash: async (text: string): Promise<string> => {
        return await bcrypt.hash(text, 8);
    },
    compare: async (text: string, hash: string): Promise<boolean> => {
        return bcrypt.compare(text, hash);
    },
};
export default crypto;
