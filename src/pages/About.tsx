import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import About1 from "../assets/images/about1.jpg"
import About2 from "../assets/images/about2.jpg"
import About3 from "../assets/images/about3.jpg"
import AboutDescriptions from "../components/AboutDescriptions";

const About = () => {
  const aboutTitle = [
    "Going all-in with millennial design",
    "Exploring new ways of decorating",
    "Handmade pieces that took time to make"
  ]

  return (
    <div>
      <NavBar/>
      <div className="text-[#333333] text-base bg-cover bg-center w-full h-15 md:h-25 flex flex-col justify-center items-center bg-[#F9F1E7]">
        <h1 className="text-xl sm:text-2xl font-bold md:text-3xl xl:text-4xl">About</h1>
        <div className="w-full text-base sm:text-lg md:text-xl xl:text-2xl  flex justify-center items-center gap-2 sm:mt-2">
          <Link to="/">Home</Link>
          <IoIosArrowForward />
          <Link to="/contact">About</Link>
        </div>
        </div>

      {/* Page Content */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#333333] text-center mt-2 lg:mt-5 xl:mt-8">Our Goals</h1>
        <AboutDescriptions image={About1} title={aboutTitle[0]}/>
        <AboutDescriptions image={About2} title={aboutTitle[1]}/>
        <AboutDescriptions image={About3} title={aboutTitle[2]}/>
      </div>
      <Footer/>
    </div>
  )
}

export default About