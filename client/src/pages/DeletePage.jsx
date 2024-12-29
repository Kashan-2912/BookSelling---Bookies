import React, { useEffect, useState } from "react";
import BookTableRow from "../components/BookTableRow";
import axios from "axios";
import { toast } from "react-toastify";

const DeletePage = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/books/delete/${id}`
      );
      if (res.status === 200) {
        toast.success(res.data.msg);
        setBooks(res.data.books);
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books/get-books");
        if (res.status === 200) {
          setBooks(res.data);
        } else {
          setMessage("Books Not Found");
        }
      } catch (error) {
        setMessage("Error fetching books");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto p-10">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th className="text-black dark:text-white">Title</th>
            <th className="text-black dark:text-white">Category</th>
            <th className="text-black dark:text-white">Description</th>
            <th className="text-black dark:text-white">Price</th>
            <th className="text-black dark:text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {message === "" ? (
            books.map((book, index) => (
              <BookTableRow
                onDelete={handleDelete}
                index={index + 1}
                key={book._id}
                book={book}
              />
            ))
          ) : (
            <tr className="text-red-500 dark:bg-slate-900  text-2xl text-center">
              <th>{message}</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DeletePage;
