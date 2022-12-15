export default function MainLayout({children, title}: {children: JSX.Element, title: string}) {
    return (
      <div className="bg-white shadow-md p-5 w-4/5 rounded-md">
        <h3 className="text-2xl text-gray-800 font-medium">{title}</h3>
        <div className="items-center w-full text-lg text-gray-800 mt-5">
          {children}
        </div>
      </div>
    )
}