import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/get-users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="overflow-x-auto mt-8 mb-8">
      <h2 className="text-4xl font-bold text-primary-red text-center  mb-12">
        User Data
      </h2>
      <table className="table table-xs mx-auto">
        <thead>
          <tr>
            <th className="text-black dark:text-white"></th>
            <th className="text-black dark:text-white">Name</th>
            <th className="text-black dark:text-white">Username</th>
            <th className="text-black dark:text-white">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-gray-500">
                No user data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
