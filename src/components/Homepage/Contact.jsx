import React from "react";

const Contact = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-[90%] mx-auto">
      <div>
        <h1 className="text-3xl text-center md:text-start font-bold mb-4">Contact Us</h1>
        <p>SOTOGRANDE, SPAIN</p>
        <p className="flex flow-row items-center">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-sharp/24/f10000/marker.png"
            className="mr-2"
            alt="marker"
          />
          <a
            href="https://www.google.com/maps/place/Centro+Comercial+Sotogrande+Planta+1+Local+37,+11310+Sotogrande"
            target="_blank"
            rel="noopener noreferrer"
          >
            Centro Comercial Sotogrande Planta 1 Local 37, 11310 Sotogrande
          </a>
        </p>
        <p className="flex flow-row items-center">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-sharp/24/f10000/new-post.png"
            className="mr-2"
            alt="new-post"
          />
          <a href="mailto:hello@ems-xperience.com">hello@ems-xperience.com</a>
        </p>
        <p className="flex flow-row items-center">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-sharp/24/f10000/phone.png"
            className="mr-2"
            alt="phone"
          />
          <a href="tel:+34689736611">+34 689736611</a>
        </p>
        <div className="mt-8">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.062556534849!2d-5.314781425655984!3d36.286531996489025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cc362cdf7c62d%3A0x2cde08359123c60c!2sCentro%20Comercial%20Mar%20y%20Sol!5e0!3m2!1sen!2sin!4v1686728573432!5m2!1sen!2sin"
            width="100%"
            height="300"
            className="border-none rounded-xl shadow"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
        <form className="flex flex-col gap-4 md:w-[80%] w-full mx-auto">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="tel"
            name="number"
            id="number"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-md p-2"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="border border-gray-300 rounded-md p-2 h-32"
          ></textarea>
          <button className="bg-[#f10000] hover:bg-[#ff5050] text-white font-bold py-2 px-4 rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
