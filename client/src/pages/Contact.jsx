import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) => {
    toast.success(
      "Your message has been forwarded to concerned authorities successfully!"
    );
    console.log("coming");
  };
  return (
    <section className="py-20 bg-white dark:bg-slate-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-primary-red mb-8">
          Contact Us
        </h1>
        <p className="text-lg mb-6">
          If you have any questions, suggestions, or concerns, feel free to
          reach out to us. We're here to help you with any issues you might be
          facing.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-red focus:border-primary-red sm:text-sm bg-white dark:bg-slate-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-red focus:border-primary-red sm:text-sm bg-white dark:bg-slate-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-red focus:border-primary-red sm:text-sm bg-white dark:bg-slate-900 dark:text-white"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primary-red hover:bg-red-600 text-white p-3 rounded-lg shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
