import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Clients } from "../pages/Clients";
import { useAuthProvider } from "../shared/lib/providers/AuthProvider";
import { UserPage } from "../pages/UserPage";
import { Loans } from "../pages/LoanPage";
import { Transaction } from "../pages/Transaction";

const Router = () => {
    const { isAuth } = useAuthProvider()
    return (
        <Routes>
            {isAuth && <Route path="/" element={<Clients />} />}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/:id" element={<UserPage/>}/>
            <Route path="/loans" element={<Loans/>}/>
            <Route path="/bill/:id/transactions" element={<Transaction/>}/>
            <Route path="*" element={<Home />} />
        </Routes>
)};

export default Router;
