// src/admin/AdminLayout.tsx
// Plain pass-through shell. Each admin page (DashboardPage, BillingPage, etc.)
// already wraps itself in its own layout/sidebar component.
// This file only exists so AppRouter can nest the admin routes under /admin/*.

import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return <Outlet />;
}