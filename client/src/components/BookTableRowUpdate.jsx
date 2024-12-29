import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import DeleteModel from "./DeleteModel";

const BookTableRowUpdate = ({ index, book, onDelete }) => {
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleUpdate = () => {
    // Navigate to the /update route, passing the book ID as a parameter
    navigate(`/update/${book._id}`);
  };

  const handleCloseDelete = () => {
    setShowDeleteModel(false);
  };

  const handleConfirmDelete = () => {
    onDelete(book._id);
    setShowDeleteModel(false);
  };

  return (
    <tr>
      <th>{index}</th>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>{book.description}</td>
      <td>{book.price}</td>
      <td>
        <button
          onClick={handleUpdate}
          className="bg-primary-red text-white px-2 py-1 hover:bg-red-600 rounded-lg"
        >
          Update
        </button>
        <DeleteModel
          onClose={handleCloseDelete}
          onConfirm={handleConfirmDelete}
          show={showDeleteModel}
        />
      </td>
    </tr>
  );
};

export default BookTableRowUpdate;
