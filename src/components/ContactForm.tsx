import { useForm, ValidationError } from "@formspree/react";


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
          className="text-center text-[#B88E2F] font-semibold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl  border border-[#B88E2F] py-1 px-6 sm:py-2 xl:py-3 sm:px-8 xl:px-10 hover:bg-[#B88E2F] hover:text-white transition"
        >
          Submit
        </button>
      </form>
    );
  }
  export default ContactForm;