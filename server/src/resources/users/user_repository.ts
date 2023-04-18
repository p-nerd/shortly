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

const userRepository = {
    save,
};

export default userRepository;
