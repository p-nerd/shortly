import InputField from "@components/common/Input/InputField";
import LandingIntro from "@components/common/Public/LandingIntro";
import ErrorText from "@components/common/Typography/ErrorText";
import authService from "@features/auth/authService";
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [linkSent, setLinkSent] = useState(false);

    const submitForm = async () => {
        setErrorMessage("");

        if (email.trim() === "")
            return setErrorMessage("Email Id is required! (use any value)");
        setLoading(true);
        try {
            await authService.forgotPassword(email);
            setLoading(false);
            setLinkSent(true);
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
                            Forgot Password
                        </h2>

                        {linkSent && (
                            <>
                                <div className="mt-8 text-center">
                                    <CheckCircleIcon className="inline-block w-32 text-success" />
                                </div>
                                <p className="my-4 text-center text-xl font-bold">
                                    Link Sent
                                </p>
                                <p className="mb-8 mt-4 text-center font-semibold">
                                    Check your email to reset password
                                </p>
                                <div className="mt-4 text-center">
                                    <Link to="/login">
                                        <button className="btn-primary btn-block btn ">
                                            Login
                                        </button>
                                    </Link>
                                </div>
                            </>
                        )}

                        {!linkSent && (
                            <>
                                <p className="my-8 text-center font-semibold">
                                    We will send password reset link on your email Id
                                </p>
                                <form
                                    onSubmit={e => {
                                        e.preventDefault();
                                        submitForm();
                                    }}
                                >
                                    <div className="mb-4">
                                        <InputField
                                            type="email"
                                            containerStyle="mt-4"
                                            label="Email Id"
                                            isRequired={true}
                                            value={email}
                                            setValue={setEmail}
                                        />
                                    </div>

                                    <ErrorText
                                        styleClass="mt-12"
                                        message={errorMessage}
                                    />
                                    <button
                                        type="submit"
                                        className={
                                            "btn-primary btn mt-2 w-full" +
                                            (loading ? " loading" : "")
                                        }
                                    >
                                        Send Reset Link
                                    </button>

                                    <div className="mt-4 text-center">
                                        Don't have an account yet?{" "}
                                        <Link to="/register">
                                            <button className="  inline-block  transition duration-200 hover:cursor-pointer hover:text-primary hover:underline">
                                                Register
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
