
import LoginIcon from '../../assets/login.png'

import * as yup from 'yup';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from '../../models/user';
import Swal from 'sweetalert2';
import { generateToken, getCurrentUser, loginAuth, logout, setUser } from '../../services/auth';


function Login() {
  const navigate = useNavigate()
  let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });


  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values: Auth) => {


      try {
        const res = await generateToken(values)
        console.log(res)
        if (res?.token != undefined) {

          loginAuth(res.token)
          const user = await getCurrentUser(res.token);
          setUser(user)
          if (user.authorities[0].authority == 'ADMIN') navigate('/admin', {replace: true})
          else if (user.authorities[0].authority == 'NORMAL') navigate('/user-dashboard')
          else { logout(); navigate('/login') }

          /* Swal.fire({
            title: 'User created',
            text: 'Redirect to dashboard',
            icon: 'success',
          }) */
        } else {
          await Swal.fire({
            title: 'Bad credentials',
            text: 'type your credentials again',
            icon: 'error'
          })
        }
      } catch (error) { console.log(error) }


    },

  });


  return (
    <div className=''>
      <div className='flex flex-col items-center max-w-lg m-auto p-5  bg-white rounded-lg shadow-lg'>
        <div className='flex flex-col items-center'>
          <img className='w-32 h-32' src={LoginIcon} />
          <h2 className='text-lg text-gray-900 font-semibold'>Login here!</h2>
        </div>

        <div className='w-full mt-10'>
          <form onSubmit={formik.handleSubmit}>
            <div className='mb-5'>
              <input
                type="text"
                name='username'
                className='w-full px-2 py-1 text-gray-900 border rounded-md border-blue-900 bg-transparent outline-none' placeholder='Username'
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.errors.username ? (
                <div className='text-red-600 text-sm '>{formik.errors.username}</div>
              ) : null}
            </div>

            <div className='mb-5'>
              <input
                type="password"
                name='password'
                className='w-full px-2 py-1 text-gray-900 border rounded-md border-blue-900 bg-transparent outline-none' placeholder='Password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? (
                <div className='text-red-600 text-sm '>{formik.errors.password}</div>
              ) : null}
            </div>

            <div className='flex flex-col items-center'>
              <div className='flex justify-evenly w-full mb-2'>
                <button
                  type='submit'
                  className='bg-green-900 text-white px-3 py-1 rounded-md text w-24 hover:bg-green-600 transition-all'>
                  Send
                </button>
                <button
                  type='submit'
                  className='bg-gray-500 text-white px-3 py-1 rounded-md text w-24'>
                  Reset
                </button>
              </div>
              <span className='text-lg text-gray-900 mt-5'>
                new here? go to
                <Link to='/signup' className='text-blue-900 font-medium'> signup!</Link>
              </span>
            </div>
          </form>
        </div>


      </div>



    </div>
  )
}

export default Login