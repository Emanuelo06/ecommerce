import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io" 
import CartImage from "../assets/images/dining.jpg"
const Cart = () => {
  
  return (
    <div>
      <NavBar/>
        <div className="text-[#333333] text-base bg-cover bg-center w-full h-15 md:h-25  flex flex-col justify-center items-center bg-[#F9F1E7]">
        <h1 className="text-xl sm:text-2xl font-bold md:text-3xl xl:text-4xl">Cart</h1>
        <div className="w-full text-base sm:text-lg md:text-xl xl:text-2xl  flex justify-center items-center gap-2 sm:mt-2">
          <Link to="/">Home</Link>
          <IoIosArrowForward />
          <Link to="/contact">Cart</Link>
        </div>
        </div>
        <div className="flex flex-row justify-around p-2 gap-1 sm:mt-5 lg:mt-8 2xl:mt-10 mb-5">
          <div className=" flex flex-col md:flex-row text-base sm:text-lg lg:text-xl 2xl:text-[22px]  gap-3 bg-[#F4F5F7]  w-40 sm:w-50  md:w-fit   p-3 md:p-5 lg:p-6">
            <img src={CartImage}  className=" self-center  w-30 sm:w-40 md:w-50 lg:w-60 xl:w-70 h-30 sm:h-40 md:h-50 lg:h-60 xl:h-70"/>
            <h1 className="md:flex md:flex-col text-[#333333]">Name: 
              <span className="font-bold text-lg lg:text-xl 2xl:text-2xl ">Dining</span></h1>
            <p> Price: 
              <span className="md:flex md:flex-col font-bold sm:text-lg 2xl:text-2xl text-[#333333]">5$</span></p>
            <p>Quantity: 
              <span className="md:flex md:flex-col font-bold sm:text-lg lg:text-xl 2xl:text-2xl text-[#333333]">1</span></p>
            <p>Total: 
              <span className="md:flex md:flex-col font-bold sm:text-lg lg:text-xl 2xl:text-2xl text-[#333333]">5$</span></p>
          </div>
          <div className="bg-[#F4F5F7] text-[#333333] text-base sm:text-lg lg:text-xl w-1/2 h-fit sm:w-40 md:w-50 lg:w-60 2xl:w-80 flex flex-col  items-start p-3 md:p-5 lg:p-6 lg:gap-3">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#333333]">Cart Totals</h1>
              <p className="mt-3 2xl:text-[22px]">Total: <span className="font-bold sm:text-lg lg:text-xl 2xl:text-2xl">5$</span></p>
              <button className="border-[#333333] self-center sm:text-lg lg:text-xl 2xl:text-2xl border rounded-lg p-2 sm:p-2.5 lg:py-3 py-1 sm:px-5 lg:px-10 mt-3 cursor-pointer hover:bg-[#333333] hover:text-[#F4F5F7]">Check Out</button>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Cart