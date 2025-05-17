 import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div>
      <div className="bg-[rgb(102,102,102)] w-full h-[1px]"/>
      <div className="flex justify-between">
      <div className="p-2 w-[40%]">
        <h1 className="font-bold text-lg md:text-xl">Furniro</h1>
        <p className="text-[#9f9f9f] text-xs md:text-sm">400 University Drive Suite 200 Coral Gables,
FL        33134 USA</p>
      </div>
      <div className="p-2 w-[20%] flex flex-col justify-end items-end text-xs md:text-sm text-[#9f9f9f]">
        <h1 className="font-bold text-[#333333] text-lg md:text-xl">Links</h1>
         <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
    <div>
      <div className="bg-[rgb(102,102,102)] w-full h-[1px] "/>
      <h1 className="text-sm md:text-base text-center text-[#666666] my-1">2025 Coded by Emanuele Czofei</h1>
    </div>
    </div>
    
  )
}

export default Footer