import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fw9fo4l", "template_32myv7o", form.current, {
        publicKey: "9MF4RNbXejYOxFt32",
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current.reset(); //clears the form inputs
        },
        (error) => {
          toast.error("Failed to send email!");
          console.log("Failed...", error.text);
        }
      );
  };
  return (
    <div className="flex flex-col items-center border-t border-stone-900 pb-20 ">
      <h2 className="my-10 text-center text-4xl font-bold">Contact</h2>
      <div className="flex flex-col w-80">
        <form
          className="flex flex-col w-full text-base "
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="pb-1.5 pt-4 text-2xl">Name</label>
          <input
            className="w-full h-9 p-2 outline-none border rounded-md border-gray-700 focus:border-blue-300 text-white"
            type="text"
            name="user_name"
          />
          <label className="mt-4 text-2xl">Email</label>
          <input
            className="w-full h-9 p-2 outline-none border rounded-md border-gray-700 focus:border-blue-300 text-white"
            type="email"
            name="user_email"
          />
          <label className="mt-4 text-2xl">Message</label>
          <textarea
            className="w-full max-w-full min-w-full max-h-full min-h-full h-30 p-2 outline-none border rounded-md border-gray-700 focus:border-blue-300  text-white"
            name="message"
          />
          <input
            className="mt-4 w-22 h-9 text-blue-300 outline-none border rounded-md border-blue-300 transition duration-400 hover:border-none hover:bg-blue-300 hover:text-black outline-2 hover:cursor-pointer "
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
