import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getUser, isLoggedIn, logout } from "../../services/auth"

function Navbar() {
  const navigate = useNavigate()
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState()

  useEffect(() => {
    setIsLogged(isLoggedIn())

    if (isLogged) {
      setUser(getUser())
    }


  }, [isLogged])

  const handleLogout = () => {
    logout()
    setUser(null)
    setIsLogged(false)
    navigate('/login')

  }
  return (
    <div className="bg-blue-600  text-white p-5 mb-5 flex justify-between shadow-md">
      <div className="text-xl font-medium">
        <Link to='/'>📑 Test manager</Link>
      </div>
      <div className="flex gap-5 text-lg font-light hover:shadow-sm">
        {!isLogged
          ? (<>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </>)
          : (<>
            <button className="font-medium">{user?.username}</button>
            <button onClick={handleLogout} >Log out</button>
          </>)
        }
      </div>
    </div>
  )
}

export default Navbar