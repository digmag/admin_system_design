import { Routes, Route } from "react-router-dom";
import { useAuthProvider } from "../shared/lib/providers/AuthProvider";
import { lazy } from "react";
import { requestPermissions, sendEvent } from "../shared/lib/firebase/messaging";

const Home = lazy(() => import("../pages/Home"))
const Login = lazy(() => import("../pages/Login"))
const Clients = lazy(() => import("../pages/Clients/Clients"))
const UserPage = lazy(() => import("../pages/UserPage/UserPage"))
const Loans = lazy(() => import("../pages/LoanPage"))
const Transaction = lazy(() => import("../pages/Transaction/Transaction"))
const Register = lazy(() => import("../pages/Register"))
const LoginFinish = lazy(() => import("../pages/LoginFinish"))


const Router = () => {
    const { isAuth } = useAuthProvider()
    return (
        <Routes>
            {isAuth && <Route path="/" element={<Clients />} />}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/bill/:id/transactions" element={<Transaction />} />
            <Route path="/login/finish" element={<LoginFinish />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
};

export default Router;