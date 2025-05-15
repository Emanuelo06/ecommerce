import Logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { IoCartOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = ()=> {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='w-full'>
      <div className=' w-full p-2 flex justify-between items-center md:shadow-md'>
        <div className='flex'>
          <img src={Logo} className='w-8 sm:w-10 md:w-15 lg:w-17 h-5 sm:h-6 md:h-8 lg:h-10'/>
          <h1 className='text-base sm:text-xl md:text-3xl lg:text-4xl lg:mt-0.5 ml-1 font-bold text-[#333333] '>Furniro</h1>
        </div>
        <ul className='hidden md:flex text-lg lg:text-xl  justify-between  gap-10'>
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/cart"}><IoCartOutline className='sm:text-xl md:text-2xl mt-0.5'/></Link>
        </ul>
        <button onClick={handleToggle} className='md:hidden'>
          {!isOpen? <CiMenuBurger className='sm:text-xl'/> : <IoMdClose className='sm:text-xl'/>  }</button>
      </div>

      {isOpen && (
        <motion.div className='w-full shadow-md mb-2'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20,}}
        transition={{ duration: 0.2 }}>
          <ul className='flex justify-between sm:text-lg items-center text-[#333333]  p-2'>
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/cart"}><IoCartOutline className='sm:text-xl'/></Link>
          </ul>
        </motion.div>
      )}
    </nav>
  )
}

export default NavBar