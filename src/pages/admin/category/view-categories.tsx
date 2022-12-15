import {useEffect, useState} from "react";
import {listCategories} from "../../../services/category.service";
import {Category} from "../../../models/category";
import {Link} from "react-router-dom";
import MainLayout from "../../../layouts/main";


export default function ViewCategories() {
    const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
      (async () => {
        const data = await listCategories();
        if(data != null) setCategories(data);
      })();

  }, [])

    return (
        <MainLayout title="Categories">
          <>
            {
              categories.length>0
              ? (
                  categories.map((category, index) => (
                    <div key={index} className="border-b-2 border-slate-500 ml-2 mt-2">
                      <h5>{category.title}</h5>
                      <p className="text-sm text-gray-600 ml-1">{category.description}</p>
                    </div>
                    ))
                    ) : <div>Not categories found</div>
            }

            <div className="w-full flex justify-center mt-10">
              <button className="bg-green-700 px-3 py-1 w-24 text-white rounded-lg align-center">
                <Link to="/admin/add-category">New</Link>
              </button>
            </div>
          </>
        </MainLayout>
    )
}