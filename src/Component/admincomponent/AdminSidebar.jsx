import React from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdAddBox,
  MdEdit,
  MdDelete,
  MdLogout,
} from "react-icons/md";
import { FaBook } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="h-screen w-64 bg-slate-900 text-white p-5">
      
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-center">
          LMS Admin
        </h1>
      </div>

      {/* Menu */}
      <ul className="space-y-3">

        <li>
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
          >
            <MdDashboard size={22} />
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin/courses"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
          >
            <FaBook size={20} />
            <span>Courses</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin/add-course"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
          >
            <MdAddBox size={22} />
            <span>Add Course</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin/edit-course"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
          >
            <MdEdit size={22} />
            <span>Edit Course</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin/delete-course"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
          >
            <MdDelete size={22} />
            <span>Delete Course</span>
          </Link>
        </li>

      </ul>

      {/* Logout */}
      <div className="absolute bottom-5 left-5 right-5">
        <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-lg transition">
          <MdLogout size={22} />
          Logout
        </button>
      </div>

    </div>
  );
};

export default AdminSidebar;