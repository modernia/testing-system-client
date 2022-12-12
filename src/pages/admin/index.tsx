import Sidebar from "./sidebar";
import {Outlet} from "react-router-dom";

function Admin() {
  return (
    <div className="m-5 flex gap-5">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Admin