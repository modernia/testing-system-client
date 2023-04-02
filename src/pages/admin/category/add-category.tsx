import * as yup from 'yup';
import {useFormik} from "formik";
import {Category} from "../../../models/category";
import {createCategory} from "../../../services/category.service";
import Swal from "sweetalert2";

export default function AddCategory () {

    let schema = yup.object().shape({
      title: yup.string().required(),
      description: yup.string(),
    });


    const formik = useFormik({
      validationSchema: schema,
      initialValues: {
        title: '',
        description: '',
      },
      onSubmit: async (values: Category) => {
          const result = await createCategory(values);
          if(result != null){
              await Swal.fire({
                title: 'Category created',
                text: 'Redirect to categories list',
                icon: 'success',
              })
          }
      },
    });

    return (
      <div className="bg-white shadow-md p-5 w-4/5 rounded-md">
        <h3 className="text-2xl text-gray-800 font-medium">Add Category</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="items-center w-full text-lg text-gray-800 mt-5">
            <div className='mb-5'>
              <input
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder="Type your title for new category"
                className='w-full px-2 py-1 text-gray-900 border rounded-md border-blue-900 bg-transparent outline-none'
              />
              {formik.errors.title ? (
                      <div className='text-red-600 text-sm '>{formik.errors.title}</div>
                      ) : null}
            </div>
            <div className='mb-5'>
              <textarea
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                className='w-full px-2 py-1 text-gray-900 border rounded-md border-blue-900 bg-transparent outline-none h-30'
                ></textarea>
            </div>


          </div>

          <div className='flex flex-col items-center'>
            <button
              type='submit'
              className='bg-blue-900 text-white px-3 py-1 rounded-md text w-24 hover:bg-blue-600 transition-all'>
              Send
            </button>
          </div>
        </form>


      </div>
    )
}