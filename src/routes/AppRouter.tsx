import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginProduct from "../auth/pages/LoginProduct";
import LoginPassword from "../auth/pages/LoginPassword";
import OTPVerify from "../auth/pages/OTPVerify";
import Signup from "../auth/pages/Signup";
import DashboardPage from "../dashboard/pages/DashboardPage";
import AppointmentsPage from "../appointments/pages/AppointmentsPage";
import PrescriptionsPage from "../prescription/pages/PrescriptionsPage";
import BillingPage from "../billing/pages/BillingPage";

// import ProtectedRoutes from "./ProtectedRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginProduct />} />
        <Route path="/password" element={<LoginPassword />} />
        <Route path="/otp" element={<OTPVerify />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/prescriptions" element={<PrescriptionsPage />} />
        <Route path="/billing" element={<BillingPage />} />

        {/* Protected route - uncomment when authentication is ready */}
        {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/dashboard" element={<DashboardPage />} />
        {/* </Route> */}

        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;