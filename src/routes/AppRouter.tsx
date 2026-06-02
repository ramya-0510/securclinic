import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginProduct from "../auth/pages/LoginProduct";
import LoginPassword from "../auth/pages/LoginPassword";
import OTPVerify from "../auth/pages/OTPVerify";
import Signup from "../auth/pages/Signup";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginProduct />} />
        <Route path="/password" element={<LoginPassword />} />
        <Route path="/otp" element={<OTPVerify />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;