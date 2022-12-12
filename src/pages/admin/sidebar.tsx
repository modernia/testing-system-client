import {AiFillFileAdd, AiFillHome, AiOutlineFileAdd} from "react-icons/ai";
import {FaList, FaUserAlt} from "react-icons/fa";
import { Link } from "react-router-dom";
import {MdOutlineQuiz} from "react-icons/all";

export default function Sidebar() {

    return (
      <div className="w-36 p-3 bg-white shadow-md rounded w-1/5 h-fit">
        <h3 className="text-gray-500 font-bold text-sm">Menu</h3>
        <div className="mt-1 flex-column">
          <Link to='/admin/'>
            <div className="flex items-center gap-1 mb-2 px-2 py-1 hover:bg-gray-100">
              <AiFillHome />
              <h4 className="text-gray-900">
                Home
              </h4>
            </div>
          </Link>

          <Link to='/admin/profile'>
            <div className="flex items-center gap-1 mb-2 px-2 py-1 hover:bg-gray-100">
              <FaUserAlt />
              <h4 className="text-gray-900">
                Profile
              </h4>
            </div>
          </Link>

          <Link to='/admin/categories'>
            <div className="flex items-center gap-1 mb-2 px-2 py-1 hover:bg-gray-100">
              <FaList />
              <h4 className="text-gray-900">
                Categories
              </h4>
            </div>
          </Link>

          <Link to='/admin/add-category'>
            <div className="flex items-center gap-1 mb-2 px-2 py-1 hover:bg-gray-100">
              <AiFillFileAdd />
              <h4 className="text-gray-900">
                New Category
              </h4>
            </div>
          </Link>

          <Link to='/admin/profile'>
            <div className="flex items-center gap-1 mb-2 px-2 py-1 hover:bg-gray-100">
              <MdOutlineQuiz />
              <h4 className="text-gray-900">
                  Quiz
              </h4>
            </div>
          </Link>

          <Link to='/admin/profile'>
            <div className="flex items-center gap-1 mb-2 px-2 py-1 hover:bg-gray-100">
              <AiOutlineFileAdd />
              <h4 className="text-gray-900">
                Add Quiz
              </h4>
            </div>
          </Link>
        </div>
      </div>
    )
}