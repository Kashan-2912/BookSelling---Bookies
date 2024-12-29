import React from "react";

const AdminSales = () => {
  return (
    <div className="flex flex-wrap mt-8 py-4 justify-center items-center gap-6">
      <div className="card w-72 h-32 shadow-xl shadow-gray-300 dark:shadow-gray-800">
        <div className="card-body">
          <h2 className="card-title">Book Sales</h2>
          <p>
            The number of books sold are : <span>147</span>{" "}
          </p>
        </div>
      </div>

      <div className="card w-72 h-32 shadow-xl shadow-gray-300 dark:shadow-gray-800">
        <div className="card-body">
          <h2 className="card-title">Users Joined</h2>
          <p>
            The number of users are : <span>93</span>{" "}
          </p>
        </div>
      </div>

      <div className="card w-72 h-32 shadow-xl shadow-gray-300 dark:shadow-gray-800">
        <div className="card-body">
          <h2 className="card-title">Website Visits</h2>
          <p>
            The total number of visits on website are : <span>1047</span>{" "}
          </p>
        </div>
      </div>

      <div className="card w-72 h-32 shadow-xl shadow-gray-300 dark:shadow-gray-800">
        <div className="card-body">
          <h2 className="card-title">Total Income</h2>
          <p>
            Total income is : <span>$20321.56</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSales;
