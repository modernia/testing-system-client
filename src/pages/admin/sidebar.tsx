import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {

    return (
      <div className="w-36 p-3 bg-white shadow-md rounded">
        <h3 className="text-gray-500 font-bold text-sm">Menu</h3>
        <div className="mt-1 flex-column">
          <div className="flex items-center gap-1 mb-2 px-2 py-1 hover:bg-gray-100">
            <AiFillHome />
            <h4 className="text-gray-900">
              <Link to='/admin'>Home</Link>
            </h4>
          </div>
          <div className="flex items-center gap-1 mb-2 px-2 py-1 hover:bg-gray-100">
            <FaUserAlt />
            <h4 className="text-gray-900">
              <Link to='/admin/profile'>Profile</Link>
            </h4>
          </div>
        </div>
      </div>
    )
}