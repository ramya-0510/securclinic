import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";

interface LocationState {
  mobile?: string;
}

function LoginPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const mobile = state?.mobile ?? "";
  const [password, setPassword] = useState("");

  const handleLogin = (): void => {
    if (!password) {
      alert("Please enter your password");
      return;
    }
    navigate("/otp", { state: { mobile, from: "/password" } });
  };

  return (
    <AuthLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h1>
        <p className="text-sm text-gray-500 mt-1">Login with your registered mobile number</p>
      </div>

      {/* Mobile number shown as read-only */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-700 font-medium">Mobile Number</label>
        <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 gap-2 bg-gray-50">
          <span className="text-sm text-gray-800 flex-1">{mobile}</span>
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 text-sm font-medium hover:underline cursor-pointer"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <InputField
          label="Password"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-right">
          <button className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
            Forgot Password?
          </button>
        </div>
      </div>

      <Button label="Login" variant="primary" fullWidth onClick={handleLogin} />

      <p className="text-center text-sm text-gray-500">
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          Login with OTP
        </button>
      </p>

      <p className="text-center text-sm text-gray-500">
        New here?{" "}
        <button
          onClick={() => navigate("/signup")}
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          Sign Up
        </button>
      </p>
    </AuthLayout>
  );
}

export default LoginPassword;