import InputText, { TUpdateFormValue } from "@components/common/Input/InputText";
import LandingIntro from "@components/common/Public/LandingIntro";
import ErrorText from "@components/common/Typography/ErrorText";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const INITIAL_LOGIN_OBJ = {
        password: "",
        emailId: "",
    };

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

    const submitForm = () => {
        setErrorMessage("");

        if (loginObj.emailId.trim() === "")
            return setErrorMessage("Email Id is required! (use any value)");
        if (loginObj.password.trim() === "")
            return setErrorMessage("Password is required! (use any value)");
        else {
            setLoading(true);
            // Call API to check user credentials and save token in localstorage
            localStorage.setItem("token", "DumyTokenHere");
            setLoading(false);
            window.location.href = "/app/dashboard";
        }
    };

    const updateFormValue: TUpdateFormValue = ({ updateType, value }) => {
        setErrorMessage("");
        setLoginObj({ ...loginObj, [updateType ?? ""]: value });
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
                                <InputText
                                    type="emailId"
                                    defaultValue={loginObj.emailId}
                                    updateType="emailId"
                                    containerStyle="mt-4"
                                    labelTitle="Email Id"
                                    updateFormValue={updateFormValue}
                                />

                                <InputText
                                    defaultValue={loginObj.password}
                                    type="password"
                                    updateType="password"
                                    containerStyle="mt-4"
                                    labelTitle="Password"
                                    updateFormValue={updateFormValue}
                                />
                            </div>

                            <div className="text-right text-primary">
                                <Link to="/forgot-password">
                                    <span className="inline-block  text-sm  transition duration-200 hover:cursor-pointer hover:text-primary hover:underline">
                                        Forgot Password?
                                    </span>
                                </Link>
                            </div>

                            <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
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
}

export default Login;
