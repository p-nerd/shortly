import InputField from "@components/common/Input/InputField";
import LandingIntro from "@components/common/Public/LandingIntro";
import ErrorText from "@components/common/Typography/ErrorText";
import { setAuth } from "@features/auth/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "src/services/auth.service";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const submitForm = async () => {
        setErrorMessage("");

        if (email.trim() === "")
            return setErrorMessage("Email Id is required! (use any value)");
        if (password.trim() === "")
            return setErrorMessage("Password is required! (use any value)");

        setLoading(true);
        try {
            const { accessToken, body } = await authService.login(email, password);
            localStorage.setItem("accessToken", accessToken);
            dispatch(setAuth(body));
            setLoading(false);
            navigate("/app/dashboard");
            // window.location.href = "/app/dashboard";
        } catch (message: any) {
            setLoading(false);
            return setErrorMessage(message);
        }
    };

    return (
        <div className="flex min-h-screen items-center bg-base-200">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  grid-cols-1 rounded-xl  bg-base-100 md:grid-cols-2">
                    <div className="">
                        <LandingIntro />
                    </div>
                    <div className="px-10 py-24">
                        <h2 className="mb-2 text-center text-2xl font-semibold">Login</h2>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                submitForm();
                            }}
                        >
                            <div className="mb-4">
                                <InputField
                                    type="email"
                                    value={email}
                                    containerStyle="mt-4"
                                    label="Email Id"
                                    setValue={setEmail}
                                />
                                <InputField
                                    type="password"
                                    containerStyle="mt-4"
                                    label="Password"
                                    value={password}
                                    setValue={setPassword}
                                />
                            </div>
                            <div className="text-right text-primary">
                                <Link to="/forgot-password">
                                    <span className="inline-block  text-sm  transition duration-200 hover:cursor-pointer hover:text-primary hover:underline">
                                        Forgot Password?
                                    </span>
                                </Link>
                            </div>
                            <ErrorText message={errorMessage} styleClass="mt-8" />{" "}
                            <button
                                type="submit"
                                className={
                                    "btn-primary btn mt-2 w-full" +
                                    (loading ? " loading" : "")
                                }
                            >
                                Login
                            </button>
                            <div className="mt-4 text-center">
                                Don't have an account yet?{" "}
                                <Link to="/register">
                                    <span className="  inline-block  transition duration-200 hover:cursor-pointer hover:text-primary hover:underline">
                                        Register
                                    </span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
