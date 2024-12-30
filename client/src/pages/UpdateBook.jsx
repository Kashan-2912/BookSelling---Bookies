import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateBook = ({ onUpdate }) => {
  const { id } = useParams();
  const bookId = id;
  const [bookData, setBookData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the book details for the given bookId
    const fetchBook = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/books/${bookId}`
        );
        setBookData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch book details.");
        setLoading(false);
      }
    };

    fetchBook();
    console.log(bookData);
  }, [bookId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:3000/books/update/${bookId}`,
        bookData
      );
      setLoading(false);
      // onUpdate(response.data);
      toast.success("Book updated successfully!");
    } catch (err) {
      setError("Failed to update book.");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-slate-900 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
        Update Book
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={bookData.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={bookData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="category" className="block font-bold mb-2">
            Price
          </label>
          <select
            id="price"
            name="price"
            className="border rounded w-full py-2 px-3 bg-white dark:bg-slate-900"
            required
            value={bookData.price}
            onChange={handleChange}
          >
            <option value="Free">Free</option>
            <option value="$10">$10</option>
            <option value="$15">$15</option>
            <option value="$20">$20</option>
          </select>
        </div>
        <button
          className="bg-primary-red hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          category="submit"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
