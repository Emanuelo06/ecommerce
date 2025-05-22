import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  function ContactForm() {
    const [state, handleSubmit] = useForm("mwpojkgq");

    if (state.succeeded) {
      return (
        <p className="text-green-600 text-center mt-4">Thanks for getting in touch!</p>
      );
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-lg mx-auto mt-10"
      >
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Your name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Abc"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Abc@def.com"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1 font-medium">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="This is an optional"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Hi! I'd like to ask about..."
            className="w-full border border-gray-300 p-2 rounded h-28"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
        >
          Submit
        </button>
      </form>
    );
  }

  return (
    <div>
      <NavBar />

      <div className="text-[#333333] font-bold text-base bg-cover bg-center w-full h-40 flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl xl:text-5xl">Contact</h1>
        <div className="w-full sm:text-xl md:text-2xl xl:text-3xl  flex justify-center items-center gap-2 mt-2">
          <Link to="/">Home</Link>
          <IoIosArrowForward />
          <Link to="/contact">Contact</Link>
        </div>
        <div className="my-2 lg:my-5 w-full h-[1px] bg-[#333333]"></div>
      </div>

      <section className="py-12 px-4 md:px-16 lg:px-32">
        <h1 className="font-bold text-center text-3xl lg:text-4xl text-[#333333]">Get In Touch With Us</h1>
        <p className="text-center lg:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          For More Information About Our Product & Services, Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        <div className="flex flex-col md:items-center md:justify-center lg:flex-row justify-between items-start gap-10 mt-12">
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
