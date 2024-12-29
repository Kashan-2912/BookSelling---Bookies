import React from "react";

const DeleteModel = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 dark:bg-white dark:bg-opacity-20 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-1/3 h-[9.2rem] text-black dark:bg-slate-900 dark:text-white p-4 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Confirm Action</h2>
        <p className="text-sm">Are you sure you want to delete this todo?</p>
        <div className="mt-4 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-base bg-gray-200 dark:bg-slate-400 dark:hover:bg-slate-600 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-primary-red text-base text-white px-4 py-2 hover:bg-red-600 rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModel;
