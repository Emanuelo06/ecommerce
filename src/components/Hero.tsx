import HeroBackground from '../assets/images/hero.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div
    style={{backgroundImage: `url(${HeroBackground})`}}
    className='pt-30 p-2 pr-5 sm:pr-10 w-full h-80 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-cover bg-center flex justify-end items-center'>
      <div className='bg-[#fff3e3] w-60 sm:w-70 md:w-85 lg:w-99 xl:w-[500px] 2xl:w-[550px] 2xl:h-90 mb-5 xl:mb-0 xl:mt-10 p-5  md:p-8 lg:10 rounded-lg'> 
        <p className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#333333]'>New Arrival</p>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#b88e2f] '>Discover Our New Collection</h1>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#333333] mb-4 md:mb-6 xl:mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <Link to={"/cart"} className='w-20 bg-[#b88e2f] text-white py-2 md:py-3 2xl:py-4 px-4 md:px-6 xl:px-8 2xl:px-10 font-semibold md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Buy Now</Link>
      </div>
    </div>
  )
}

export default Hero