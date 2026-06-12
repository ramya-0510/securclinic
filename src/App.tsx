import { useState } from "react";
import AppRouter from "./routes/AppRouter";
import { LogoutModal } from "./logout/LogoutModal";

function App() {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <AppRouter onLogoutClick={() => setShowLogout(true)} />
      <LogoutModal
        isOpen={showLogout}
        onCancel={() => setShowLogout(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}

export default App;