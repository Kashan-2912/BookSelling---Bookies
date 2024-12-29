import React, { useState } from "react";
import DeleteModel from "./DeleteModel";

const BookTableRow = ({ index, book, onDelete }) => {
  const [showDeleteModel, setShowDeleteModel] = useState(false);

  const handleDelete = () => {
    setShowDeleteModel(true);
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
          onClick={() => handleDelete()}
          className="bg-primary-red text-white px-2 py-1 hover:bg-red-600 rounded-lg"
        >
          Delete
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

export default BookTableRow;
