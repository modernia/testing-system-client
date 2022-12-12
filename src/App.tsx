import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Navbar from './components/atoms/navbar'
import Admin from './pages/admin'

import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import Home from './pages/home'
import UserDashboard from './pages/user/user-dashboard'

import { getUserRol, isLoggedIn } from './services/auth'
import Welcome from "./pages/admin/welcome";
import Profile from "./pages/profile";
import ViewCategories from "./pages/admin/category/view-categories";
import AddCategory from "./pages/admin/category/add-category";

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState<boolean | null>(true)

  useEffect(() => {
    setIsLogged(isLoggedIn())
    const rol = getUserRol()
    if (rol == 'ADMIN') setIsAdmin(true)
    else if (rol == 'NORMAL') setIsAdmin(false)
    else setIsAdmin(null)
    console.log("isLogged", isLogged)

  }, [isLogged])

  return (
    <div className="h-[100vh] bg-gray-200">
      <Navbar />

      <Routes>
        <Route path='/' element={
          isLogged ? <Home /> : <Navigate to={'/login'} />
        } />
        <Route path='/admin' element={
            isAdmin ? <Admin /> : <Navigate to={'/user-dashboard'} />
        }>
          <Route path='/admin/' element={<Welcome />} />
          <Route path='/admin/profile' element={<Profile />} />
          <Route path='/admin/categories' element={<ViewCategories />} />
          <Route path='/admin/add-category' element={<AddCategory />} />
        </Route>
        <Route path='/user-dashboard' element={
          isLogged ? <UserDashboard /> : <Navigate to={'/login'} />
        } />

        <Route path='/signup' element={!isLogged ? <Signup /> : <Navigate to={'/'} />} />
        <Route path='/login' element={!isLogged ? <Login /> : <Navigate to={'/'} />} />
      </Routes>
    </div>
  )
}

export default App
