import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <div>
      <NavBar/>
      <div
      className="
      text-[#333333] font-bold text-base
      bg-cover bg-center w-full h-20 sm:h-30 md:h-40 lg:h-60 xl:h-80 2xl:h-120 flex flex-col justify-center items-center">
        <h1 className="text-xl ">Blog</h1>
        <div className="w-full flex justify-center">
          <Link to={"/"} className="  ">Home</Link>
          <IoIosArrowForward className=" mt-1.5"/>
          <Link to={"/contact"}>Blog</Link> 
        </div>
        <div className="my-2 w-full h-[1px] bg-[#333333]"></div>
      </div>

      {/* Page Content */}
      <Footer/>
    </div>
  )
}

export default About