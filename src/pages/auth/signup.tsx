import AddUser from '../../assets/add-user.png'

import * as yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { signup } from '../../services/auth';
import { User } from '../../models/user';
import Swal from 'sweetalert2';



function Signup() {
  let schema = yup.object().shape({
    username: yup.string().required(),
    name: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email(),
    password: yup.string().required(),
    phone: yup.string().required(),
  });

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      username: '',
      name: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
    },
    onSubmit: async (values: User) => {
      try {
        const res = await signup(values);
        if (res !== null)
          await Swal.fire({
            title: 'User created',
            text: 'Redirect to dashboard',
            icon: 'success',
          })


      } catch (error) {
        await Swal.fire({
          title: 'Error!',
          text: `error: ${error}`,
          icon: 'error'
        })
      }
    },

  });


  return (
    <div className=''>
      <div className='flex flex-col items-center max-w-lg m-auto p-5 bg-white rounded-lg shadow-lg mb-10'>
        <div className='flex flex-col items-center'>
          <img className='w-32 h-32' src={AddUser} />
          <h2 className='text-lg text-gray-900 font-semibold'>Sign up here!</h2>
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
                type="text"
                name='name'
                className='w-full px-2 py-1 text-gray-900 border rounded-md border-blue-900 bg-transparent outline-none' placeholder='Name'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div className='text-red-600 text-sm '>{formik.errors.name}</div>
              ) : null}
            </div>
            <div className='mb-5'>
              <input
                type="text"
                name='lastName'
                className='w-full px-2 py-1 text-gray-900 border rounded-md border-blue-900 bg-transparent outline-none' placeholder='Lastname'
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? (
                <div className='text-red-600 text-sm '>{formik.errors.lastName}</div>
              ) : null}
            </div>
            <div className='mb-5'>
              <input
                type="email"
                name='email'
                className='w-full px-2 py-1 text-gray-900 border rounded-md border-blue-900 bg-transparent outline-none' placeholder='Email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className='text-red-600 text-sm '>{formik.errors.email}</div>
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
            <div className='mb-5'>
              <input
                type="text"
                name='phone'
                className='w-full px-2 py-1 text-gray-900 border rounded-md border-blue-900 bg-transparent outline-none' placeholder='Phone'
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.errors.phone ? (
                <div className='text-red-600 text-sm '>{formik.errors.phone}</div>
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
                Alreaye have an account?
                <Link to='/login' className='text-blue-900 font-medium'> login here!</Link>
              </span>
            </div>
          </form>
        </div>


      </div>



    </div>
  )
}


export default Signup