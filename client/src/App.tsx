import checkAuth from "@app/auth";
import initializeApp from "@app/init";
import ResetPassword from "@pages/public/ResetPassword";
import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Importing pages
const Layout = lazy(() => import("@components/layouts/Layout"));
const Login = lazy(() => import("@pages/public/Login"));
const ForgotPassword = lazy(() => import("@pages/public/ForgotPassword"));
const Register = lazy(() => import("@pages/public/Register"));

// Initializing different libraries
initializeApp();

// Check for login and initialize axios
const token = checkAuth();

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public routes */}
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/register" element={<Register />} />

                {/* Place new routes over this */}
                <Route path="/app/*" element={<Layout />} />

                <Route
                    path="*"
                    element={
                        <Navigate to={token ? "/app/dashboard" : "/login"} replace />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
