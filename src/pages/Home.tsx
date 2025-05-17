import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import ProductsGrid from "../components/ProductsGrid"
import Footer from "../components/Footer"
import Living from '../assets/images/living.jpg'
import Dining from '../assets/images/dining.jpg'
import Bedroom from '../assets/images/bedroom.jpg'
const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div>
        <h1 className="text-center font-bold text-lg sm:text-2xl md:text-3xl mt-3 sm:mt-5 text-[#333333]">Browse The Range</h1>
        <p className="text-center text-sm sm:text-base md:text-lg text-[#666666]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className="flex flex-col justify-center sm:flex-row items-center gap-4 mt-4 px-2">
          <div className="">
            <img src={Dining} alt="dining-img" className="w-40 sm:w-50"/>
             <h1 className="text-center font-bold text-sm sm:text-base md:text-lg mt-3 text-[#333333]">Dining</h1>
          </div>
          <div>
            <img src={Living} alt="living-img" className="w-40 sm:w-50" />
             <h1 className="text-center font-bold text-sm sm:text-base md:text-lg mt-3  text-[#333333]">Living</h1>
          </div>
          <div>
            <img src={Bedroom} alt="bedroom-img"  className="w-40 sm:w-50"/>
             <h1 className="text-center font-bold text-sm sm:text-base md:text-lg mt-3 text-[#333333]">Bedroom</h1>
          </div>
          

        </div>
      </div>
      <ProductsGrid />
      <Footer />  
    </div>
  )
}

export default Home