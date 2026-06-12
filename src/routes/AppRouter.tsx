import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginProduct from "../auth/pages/LoginProduct";
import LoginPassword from "../auth/pages/LoginPassword";
import OTPVerify from "../auth/pages/OTPVerify";
import Signup from "../auth/pages/Signup";
import DashboardPage from "../dashboard/pages/DashboardPage";
import AppointmentsPage from "../appointments/pages/AppointmentsPage";
import PrescriptionsPage from "../prescription/pages/PrescriptionsPage";
import PatientPrescriptionsPage from "../prescription/pages/PatientPrescriptionsPage";
import BillingPage from "../billing/pages/BillingPage";
import NewRegistrationPage from "../registration/pages/NewRegistrationPage";
import ConsultationPage from "../consultation/pages/ConsultationPage";
import InsightsPage from "../insights/pages/InsightsPage";
import SettingsPage from "../settings/pages/SettingsPage";


interface Props {
  onLogoutClick: () => void;
}

const AppRouter = ({ onLogoutClick }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginProduct />} />
        <Route path="/password" element={<LoginPassword />} />
        <Route path="/otp" element={<OTPVerify />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardPage onLogoutClick={onLogoutClick} />} />
        <Route path="/appointments" element={<AppointmentsPage onLogoutClick={onLogoutClick} />} />
        <Route path="/prescriptions" element={<PrescriptionsPage onLogoutClick={onLogoutClick} />} />
        <Route path="/prescriptions/patient" element={<PatientPrescriptionsPage onLogoutClick={onLogoutClick} />} />
        <Route path="/billing" element={<BillingPage onLogoutClick={onLogoutClick} />} />
        <Route path="/new-registration" element={<NewRegistrationPage onLogoutClick={onLogoutClick} />} />
        <Route path="/consultation" element={<ConsultationPage onLogoutClick={onLogoutClick} />} />
        <Route path="/insights" element={<InsightsPage onLogoutClick={onLogoutClick} />} />
        <Route path="/settings" element={<SettingsPage onLogoutClick={onLogoutClick} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;