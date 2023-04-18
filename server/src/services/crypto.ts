import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../core/env";

const hash = async (str: string): Promise<string> => {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return await bcrypt.hash(str, salt);
};

const compare = async (str: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(str, hash);
};

const crypto = {
    hash,
    compare,
};

export default crypto;
