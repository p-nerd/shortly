import expressRateLimit from "express-rate-limit";

const authLimiter = expressRateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    skipSuccessfulRequests: true,
});

export default authLimiter;
