import {useEffect, useState} from "react";
import {getUser} from "../../services/auth";
import {User} from "../../models/user";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    setUser(getUser())

  }, [])

  console.log(user)

  if(user === null) return <div></div>;

  return (
    <div className="bg-white shadow-md p-5 w-4/5 rounded-md">
      <h3 className="text-2xl text-gray-800 font-medium">Profile details</h3>
      <div className="flex flex-col gap-5 items-center w-full text-lg text-gray-900">
        <div className="flex flex-col items-center gap-5">
          <img
            className="w-36 h-36 rounded-full border-2 border-gray-300 p-1"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="User image"
          />
          <h2 className="text-lg text-gray-600 font-medium"> {user.name} {user.lastName}</h2>
        </div>

        <div className="w-full">
          <div className="w-full flex justify-between text-center items-center border-y-2 border-x-2  border-gray-400">
            <label className="w-1/3 border-r-2 border-gray-400">Username</label>
            <p className="w-2/3">{user.username}</p>
          </div>

          <div className="w-full flex justify-between text-center items-center border-x-2 border-b-2 border-gray-400">
            <label className="w-1/3 border-r-2 border-gray-400">ID</label>
            <p className="w-2/3">{user.id}</p>
          </div>

          <div className="w-full flex justify-between text-center items-center border-x-2 border-b-2 border-gray-400">
            <label className="w-1/3 border-r-2 border-gray-400">Phone</label>
            <p className="w-2/3">{user.phone}</p>
          </div>

          <div className="w-full flex justify-between text-center items-center border-x-2 border-b-2 border-gray-400">
            <label className="w-1/3 border-r-2 border-gray-400">Role</label>
            <p className="w-2/3">{user.authorities[0].authority}</p>
          </div>

          <div className="w-full flex justify-between text-center items-center border-x-2 border-b-2 border-gray-400">
            <label className="w-1/3 border-r-2 border-gray-400">State</label>
            <p className="w-2/3">{user.enabled ? 'Active' : 'No active'}</p>
          </div>
        </div>

        <div className="flex gap-5">
          <button type="submit" className="bg-blue-900 px-3 py-1 text-sm w-24 text-white rounded-lg">
            Update
          </button>
          <button className="bg-green-700 px-3 py-1 text-sm w-24 text-white rounded-lg">
            Share
          </button>
        </div>
      </div>

    </div>
  )
}