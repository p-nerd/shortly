import InputField from "@components/common/Input/InputField";
import LandingIntro from "@components/common/Public/LandingIntro";
import ErrorText from "@components/common/Typography/ErrorText";
import { useResetPasswordMutation } from "@features/auth/authApi";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const query = new URLSearchParams(location.search);

    const token = query.get("token");

    useEffect(() => {
        if (!token) {
            setErrorMessage("Give token in query parameter");
        }
    }, [token]);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [resetPassword, { isLoading, isSuccess, isError, error }] =
        useResetPasswordMutation();

    useEffect(() => {
        if (isError) {
            setErrorMessage(error.data.message);
        }
    }, [isError]);

    useEffect(() => {
        setLoading(loading);
    }, [isLoading]);

    useEffect(() => {
        if (isSuccess) {
            navigate("/login");
        }
    }, [isSuccess]);

    const submitForm = async () => {
        setErrorMessage("");
        if (password.trim() === "")
            return setErrorMessage("Password is required! (use any value)");
        if (password.trim() !== confirmPassword.trim()) {
            return setErrorMessage("Password is not matching");
        }
        if (!token) {
            return setErrorMessage("Give token in query parameter");
        }

        resetPassword({ password, token });
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
                            Reset Password
                        </h2>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                submitForm();
                            }}
                        >
                            <div className="mb-4">
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
                                Reset Password
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

export default ResetPassword;
