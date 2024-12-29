import React from "react";

const ConfirmLogout = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 bg-gray-600 dark:bg-white dark:bg-opacity-30 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-slate-900 w-1/3 h-44 p-4 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Confirm Action</h2>
        <p>Are you sure you want to logout?</p>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 dark:bg-slate-400 dark:hover:bg-slate-600 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="block bg-primary-red text-white text-xl font-semibold text-center py-2 px-4 rounded-md hover:bg-red-600 hover:cursor-pointer transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogout;
