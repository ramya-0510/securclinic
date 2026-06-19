// src/routes/AppRouter.tsx

import { Routes, Route, Navigate } from "react-router-dom";

// ─── Auth pages ───────────────────────────────────────────────────────────────
import LoginProduct from "../auth/pages/LoginProduct";
import LoginPassword from "../auth/pages/LoginPassword";
import OTPVerify from "../auth/pages/OTPVerify";
import Signup from "../auth/pages/Signup";

// ─── Patient ──────────────────────────────────────────────────────────────────
import PatientLayout from "../patient/PatientLayout";
import DashboardPage from "../patient/dashboard/pages/DashboardPage";
import AppointmentsPage from "../patient/appointments/pages/AppointmentsPage";
import BillingPage from "../patient/billing/pages/BillingPage";
import ConsultationPage from "../patient/consultation/pages/ConsultationPage";
import PrescriptionPage from "../patient/prescription/pages/PrescriptionsPage";
import SettingsPage from "../patient/settings/pages/SettingsPage";

// ─── Doctor ───────────────────────────────────────────────────────────────────
import DoctorLayout from "../doctor/DoctorLayout";
import DoctorDashboardPage from "../doctor/dashboard/pages/DashboardPage";
import DoctorAppointmentsPage from "../doctor/appointments/pages/AppointmentsPage";
import DoctorConsultationPage from "../doctor/consultation/pages/ConsultationPage";
import DoctorPrescriptionPage from "../doctor/prescription/pages/PrescriptionsPage";
import DoctorSettingsPage from "../doctor/settings/pages/SettingsPage";

// ─── Admin ────────────────────────────────────────────────────────────────────
import AdminLayout from "../admin/AdminLayout";
import AdminDashboardPage from "../admin/dashboard/pages/DashboardPage";
import AdminRegistrationPage from "../admin/registration/pages/NewRegistrationPage";
import AdminBillingPage from "../admin/billing/pages/BillingPage";
import AdminInsightsPage from "../admin/insights/pages/InsightsPage";
import AdminSettingsPage from "../admin/settings/pages/SettingsPage";

interface AppRouterProps {
  onLogoutClick: () => void;
}

export default function AppRouter({ onLogoutClick }: AppRouterProps) {
  return (
    <Routes>

      {/* Default → go to login */}
      <Route path="/" element={<Navigate to="/auth/login" replace />} />

      {/* ── Auth ─────────────────────────────────────────────────────────── */}
      <Route path="/auth/login"    element={<LoginProduct />} />
      <Route path="/auth/password" element={<LoginPassword />} />
      <Route path="/auth/otp"      element={<OTPVerify />} />
      <Route path="/auth/signup"   element={<Signup />} />

      {/* ── Patient ──────────────────────────────────────────────────────── */}
      <Route path="/patient" element={<PatientLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard"    element={<DashboardPage onLogoutClick={onLogoutClick} />} />
        <Route path="appointments" element={<AppointmentsPage onLogoutClick={onLogoutClick} />} />
        <Route path="consultation" element={<ConsultationPage onLogoutClick={onLogoutClick} />} />
        <Route path="prescription" element={<PrescriptionPage onLogoutClick={onLogoutClick} />} />
        <Route path="billing"      element={<BillingPage onLogoutClick={onLogoutClick} />} />
        <Route path="settings"     element={<SettingsPage onLogoutClick={onLogoutClick} />} />
      </Route>

      {/* ── Doctor ───────────────────────────────────────────────────────── */}
      <Route path="/doctor" element={<DoctorLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard"    element={<DoctorDashboardPage onLogoutClick={onLogoutClick} />} />
        <Route path="appointments" element={<DoctorAppointmentsPage onLogoutClick={onLogoutClick} />} />
        <Route path="consultation" element={<DoctorConsultationPage onLogoutClick={onLogoutClick} />} />
        <Route path="prescription" element={<DoctorPrescriptionPage onLogoutClick={onLogoutClick} />} />
        <Route path="settings"     element={<DoctorSettingsPage onLogoutClick={onLogoutClick} />} />
      </Route>

      {/* ── Admin ────────────────────────────────────────────────────────── */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard"    element={<AdminDashboardPage onLogoutClick={onLogoutClick} />} />
        <Route path="registration" element={<AdminRegistrationPage onLogoutClick={onLogoutClick} />} />
        <Route path="billing"      element={<AdminBillingPage onLogoutClick={onLogoutClick} />} />
        <Route path="insights"     element={<AdminInsightsPage onLogoutClick={onLogoutClick} />} />
        <Route path="settings"     element={<AdminSettingsPage onLogoutClick={onLogoutClick} />} />
      </Route>

      {/* 404 → back to login */}
      <Route path="*" element={<Navigate to="/auth/login" replace />} />

    </Routes>
  );
}