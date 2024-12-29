import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AdminLoginForm from "./AdminLoginForm";

const LoginModel = ({ show, onCancel }) => {
  const [login, setLogin] = useState(true);
  const [adminLogin, setAdminLogin] = useState(true);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 dark:bg-white dark:bg-opacity-20 bg-opacity-30 md:p-4">
      <div className="bg-white dark:bg-slate-900 dark:text-white p-6 w-full h-full md:h-auto md:w-1/2  flex flex-col items-center justify-center rounded-lg shadow-lg relative">
        <ImCross
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onCancel}
        />
        <div className="text-center text-2xl font-bold text-gray-800 dark:text-white">
          {!adminLogin ? (login ? "Log In" : "Sign Up") : "Login as Admin"}
        </div>
        {!adminLogin ? (
          login ? (
            <LoginForm onCancel={onCancel} />
          ) : (
            <RegisterForm onCancel={onCancel} />
          )
        ) : (
          <AdminLoginForm onCancel={onCancel} />
        )}
        {!adminLogin ? (
          <p className="text-center mt-6 text-gray-700 dark:text-white">
            {login ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setLogin(!login)}
              className="text-blue-600 ml-2 underline hover:text-blue-800 transition duration-200"
            >
              {login ? "Sign Up" : "Log In"}
            </button>
          </p>
        ) : (
          ""
        )}

        <p className="text-center mt-6 text-gray-700 dark:text-white">
          {!adminLogin ? "Login as an Admin " : "Back to user login "}
          <button
            onClick={() => setAdminLogin(!adminLogin)}
            className="text-blue-600 ml-2 underline hover:text-blue-800 transition duration-200"
          >
            Here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModel;
