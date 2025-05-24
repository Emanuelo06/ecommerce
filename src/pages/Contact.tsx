import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ContactForm from "../components/COntactForm";

const Contact = () => {
  

  return (
    <div>
      <NavBar />

      <div className="text-[#333333]  text-base bg-cover bg-center w-full h-15 md:h-25 flex flex-col justify-center items-center bg-[#F9F1E7]">
        <h1 className="text-xl sm:text-2xl font-bold md:text-3xl xl:text-4xl">Contact</h1>
        <div className="w-full sm:text-lg md:text-xl xl:text-2xl  flex justify-center items-center gap-2 mt-2">
          <Link to="/">Home</Link>
          <IoIosArrowForward />
          <Link to="/contact">Contact</Link>
        </div>
        
      </div>

      <section className="py-12 px-4 md:px-16 lg:px-32">
        <h1 className="font-bold text-center text-2xl lg:text-3xl xl:text-4xl text-[#333333]">Get In Touch With Us</h1>
        <p className="text-center lg:text-lg xl:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          For More Information About Our Product & Services, Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        <div className="flex flex-col md:items-center md:justify-center lg:flex-row justify-between xl:justify-evenly items-start gap-10 mt-12">
          <div className="space-y-8 w-50%flex flex-col md:items-center md:justify-center lg:w-1/2">
            <div>
              <h2 className="font-semibold text-lg">📍 Address</h2>
              <p className="text-gray-700">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">📞 Phone</h2>
              <p className="text-gray-700">Mobile: (+84) 546-6789</p>
              <p className="text-gray-700">Hotline: (+84) 456-6789</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">🕒 Working Time</h2>
              <p className="text-gray-700">Monday–Friday: 9:00 - 22:00</p>
              <p className="text-gray-700">Saturday–Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
