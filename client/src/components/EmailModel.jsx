import React from "react";

const EmailModel = ({ show, onOk }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 bg-gray-600 dark:bg-white dark:bg-opacity-30 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-slate-900 w-1/3 h-44 p-4 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Enter Email</h2>
        <p>Please enter you email!</p>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onOk}
            className="block bg-primary-red text-white text-xl font-semibold text-center py-2 px-4 rounded-md hover:bg-red-600 hover:cursor-pointer transition-all duration-300"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailModel;
