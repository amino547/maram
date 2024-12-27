
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log(response.data.message);
      // Optionally, reset the form or show a success message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form. Please try again.');
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen text-white bg-gradient-to-br from-blue-500 to-purple-600">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?fit=crop&w=1280&q=80")',
        }}
      ></div>

      {/* Header */}
      <div className="relative z-10 py-10 text-center">
        <h1 className="mb-4 text-5xl font-bold">Contact Us</h1>
        <p className="text-lg font-medium">We’re here to assist you anytime!</p>
      </div>

      {/* Contact Details Section */}
      <div className="relative z-10 grid max-w-5xl gap-8 px-4 mx-auto mb-10 sm:px-6 lg:px-8 md:grid-cols-3">
        {/* Phone Section */}
        <div className="flex items-center p-6 text-gray-800 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <FaPhoneAlt className="mr-4 text-3xl text-blue-500" aria-label="Phone" />
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Call Us</h2>
            <p className="mb-1 text-lg">+1 (800) 123-4567</p>
            <p className="text-lg">+1 (800) 987-6543</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-center p-6 text-gray-800 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <FaEnvelope className="mr-4 text-3xl text-blue-500" aria-label="Email" />
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Email Us</h2>
            <p className="mb-1 text-lg">support@jiibly.com</p>
            <p className="text-lg">info@jiibly.com</p>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex items-center p-6 text-gray-800 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <FaMapMarkerAlt className="mr-4 text-3xl text-blue-500" aria-label="Location" />
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Visit Us</h2>
            <p className="mb-1 text-lg">123 Delivery Lane,</p>
            <p className="text-lg">Lafayette, TN 12345</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="relative z-10 w-full max-w-4xl p-8 mb-12 text-gray-800 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center">Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="relative z-10 w-full h-64 bg-gray-300">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.8382040058473!2d-122.08424938468168!3d37.42199977982547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24f6e5ab6e5%3A0x478c8f9dd8f935af!2sGoogleplex!5e0!3m2!1sen!2sus!4v1605242702035!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 text-center border-t border-purple-500">
        <p className="text-lg">&copy; 2024 Jiibly. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;


