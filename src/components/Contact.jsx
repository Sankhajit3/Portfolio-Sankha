import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/ayvvlogb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-xl container mx-auto px-4 md:px-16 my-16"
    >
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4 dark:text-white">
        Contact Me
      </h1>
      <p className="text-xl text-gray-600 text-center mb-8 dark:text-gray-300">
        Fill out the form below to get in touch with me
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-100 dark:bg-gray-700 dark:border-gray-500">
          <img
            src="../../public/contact.webp" // Replace with your image URL
            alt="Contact Illustration"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Contact Form with Gradient, Shadow, and Hover Effects */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-3xl shadow-2xl border-2 border-indigo-200 hover:shadow-3xl hover:bg-indigo-700 transition-all duration-300 ease-in-out dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Send Your Message
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input */}
            <div className="flex flex-col mb-6">
              <label className="block text-lg font-medium text-white">
                Full Name
              </label>
              <input
                {...register("name", { required: "Full Name is required" })}
                className="shadow-md rounded-lg border-2 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out hover:border-indigo-400"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-sm text-red-500 mt-2">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className="flex flex-col mb-6">
              <label className="block text-lg font-medium text-white">
                Email Address
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                className="shadow-md rounded-lg border-2 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out hover:border-indigo-400"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-sm text-red-500 mt-2">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Message Input */}
            <div className="flex flex-col mb-6">
              <label className="block text-lg font-medium text-white">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="shadow-md rounded-lg border-2 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out hover:border-indigo-400"
                id="message"
                name="message"
                placeholder="Enter your message or query"
                rows="5"
              ></textarea>
              {errors.message && (
                <span className="text-sm text-red-500 mt-2">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
