import jsonwebtoken from "jsonwebtoken";

const JWT_SECRET_KEY = "key";
const JWT_EXPIRES_IN_MINUTE = 60;

const generate = (payload: object): Promise<string> => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.sign(
            payload,
            JWT_SECRET_KEY,
            { expiresIn: JWT_EXPIRES_IN_MINUTE * 60 },
            (err, token) => {
                if (err) return reject(err);
                if (!token) return reject(new Error("Token is undefined"));
                return resolve(token);
            }
        );
    });
};

const validate = (token: string): object => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, JWT_SECRET_KEY, (err, decoded) => {
            if (err) return reject(err);
            return resolve(decoded);
        });
    });
};

const jwt = {
    generate,
    validate,
};

export default jwt;
