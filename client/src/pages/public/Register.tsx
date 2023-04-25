import InputField from "@components/common/Input/InputField";
import LandingIntro from "@components/common/Public/LandingIntro";
import ErrorText from "@components/common/Typography/ErrorText";
// import { setAuth } from "@features/auth/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "@features/auth/authService";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const submitForm = async () => {
        setErrorMessage("");
        if (name.trim() === "")
            return setErrorMessage("Name is required! (use any value)");
        if (email.trim() === "")
            return setErrorMessage("Email Id is required! (use any value)");
        if (password.trim() === "")
            return setErrorMessage("Password is required! (use any value)");
        if (password.trim() !== confirmPassword.trim()) {
            return setErrorMessage("Password is not matching");
        }
        setLoading(true);
        try {
            const { accessToken, body } = await authService.register(
                email,
                password,
                name
            );
            localStorage.setItem("accessToken", accessToken);
            // dispatch(setAuth(body));
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
                        <h2 className="mb-2 text-center text-2xl font-semibold">
                            Register
                        </h2>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                submitForm();
                            }}
                        >
                            <div className="mb-4">
                                <InputField
                                    containerStyle="mt-4"
                                    label="Name"
                                    value={name}
                                    setValue={setName}
                                />
                                <InputField
                                    type="email"
                                    containerStyle="mt-4"
                                    label="Email Id"
                                    value={email}
                                    setValue={setEmail}
                                    isRequired={true}
                                />
                                <InputField
                                    type="password"
                                    containerStyle="mt-4"
                                    label="Password"
                                    value={password}
                                    setValue={setPassword}
                                    isRequired={true}
                                />
                                <InputField
                                    type="password"
                                    containerStyle="mt-4"
                                    label="Confirm Password"
                                    value={confirmPassword}
                                    setValue={setConfirmPassword}
                                    isRequired={true}
                                />
                            </div>

                            <ErrorText styleClass="mt-8" message={errorMessage} />
                            <button
                                type="submit"
                                className={
                                    "btn-primary btn mt-2 w-full" +
                                    (loading ? " loading" : "")
                                }
                            >
                                Register
                            </button>

                            <div className="mt-4 text-center">
                                Already have an account?{" "}
                                <Link to="/login">
                                    <span className="  inline-block  transition duration-200 hover:cursor-pointer hover:text-primary hover:underline">
                                        Login
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

export default Register;
