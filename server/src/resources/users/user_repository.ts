import User, { IUser } from "./user_model";

export interface TUserSave {
    name: string;
    email: string;
    password: string;
    isVerified: boolean;
    primaryEmail: string;
    lastLogin: Date;
    mobileNumber?: string;
}

const save = async (data: TUserSave): Promise<IUser> => {
    try {
        return await User.create(data);
    } catch (error: any) {
        if (error.code === 11000) {
            throw 409;
        }
        throw 500;
    }
};

const getByEmail = async (email: string): Promise<IUser> => {
    try {
        const user = await User.findOne({ email });
        if (!user) throw 404;
        return user;
    } catch (e: any) {
        if (e === 404) throw e;
        throw 500;
    }
};

const userRepository = {
    save,
    getByEmail,
};

export default userRepository;
