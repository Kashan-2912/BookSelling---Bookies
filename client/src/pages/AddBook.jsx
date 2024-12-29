import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Story Book");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("Free");

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/books/add-book",
        {
          title,
          category,
          description,
          price,
        },
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        toast.success("Book added successfully");
        setTitle("");
        setCategory("Story Book");
        setDescription("");
        setPrice("Free");
      } else {
        toast.error("Failed to add the book");
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  return (
    <section className="bg-red-50 dark:bg-slate-900">
      <div className="m-auto max-w-2xl py-10">
        <div className="px-6 py-8 mb-4 shadow-lg rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-primary-red text-center font-semibold mb-6">
              Add Book
            </h2>

            <div className="mb-4">
              <label htmlFor="category" className="block font-bold mb-2">
                Book Category
              </label>
              <select
                id="category"
                name="category"
                className="border rounded w-full py-2 px-3 bg-white dark:bg-slate-900"
                required
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              >
                <option value="Full-Time">Story Book</option>
                <option value="Part-Time">Science Fiction Book</option>
                <option value="Remote">Health Book</option>
                <option value="Internship">Programming Book</option>
                <option value="Internship">Travel Book</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2">Book Name</label>
              <input
                category="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2 bg-white dark:bg-slate-900"
                placeholder="eg. Raodmap to Full Stack"
                required
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3 bg-white dark:bg-slate-900"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block font-bold mb-2">
                Price
              </label>
              <select
                id="price"
                name="price"
                className="border rounded w-full py-2 px-3 bg-white dark:bg-slate-900"
                required
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              >
                <option value="Free">Free</option>
                <option value="$10">$10</option>
                <option value="$15">$15</option>
                <option value="$20">$20</option>
              </select>
            </div>

            <div>
              <button
                className="bg-primary-red hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                category="submit"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBook;
