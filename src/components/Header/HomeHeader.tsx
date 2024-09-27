import { Link } from "react-router-dom"

const HomeHeader = () => {

  return (
    <div className="bg-[url(https://images.pexels.com/photos/1764702/pexels-photo-1764702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover px-4 sm:px-6 lg:px-8 p-9" >
      <header className="">
        <div className=" flex justify-between text-white">
          <p className=" font-bold text-lg text-white">Life isn’t about finding yourself. It’s about creating yourself</p>
          <div className="flex ">
            <Link to={"/addcategory"}>
            <button className="text-white font-bold bg-cyan-600 rounded-md p-2"> Add category</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default HomeHeader
