import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { FaShippingFast } from 'react-icons/fa';
import { getReviews } from '../services/api';

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="relative min-h-screen text-white bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
      <Navbar />

      <div className="relative z-10 px-4 pt-20 pb-10 text-center md:px-10">
        <div className="flex items-center justify-center mb-6 space-x-3 animate-fade-in">
          <FaShippingFast className="text-4xl text-yellow-400 md:text-6xl" />
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Jiibly
          </h1>
        </div>
        <p className="mb-8 text-lg md:text-2xl animate-fade-in-delayed">
          Reliable, fast, and secure delivery services tailored for you.
        </p>
        <div className="flex justify-center space-x-6">
          <Link to="/register">
            <Button
              text="Get Started"
              className="font-semibold text-white bg-yellow-500 hover:bg-yellow-600"
            />
          </Link>
          <Link to="/login">
            <Button
              text="Log In"
              className="text-white bg-transparent border-2 border-white hover:bg-white hover:text-black"
            />
          </Link>
        </div>
      </div>

      <div className="relative z-10 py-10 bg-white">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
          Our Service in Action
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4">
            <img
              src="https://d23xypyp2dkdqm.cloudfront.net/wp-content/uploads/2022/01/31034059/woman-hand-accepting-delivery-boxes-from-deliveryman-1-1024x683.jpg"
              alt="Delivery"
              className="w-1/3 rounded-lg shadow-md"
            />
            <img
              src="https://www.parcelandpostaltechnologyinternational.com/wp-content/uploads/2024/03/Parcel-hero-courier-scaled-e1710254637620.jpg"
              alt="Courier"
              className="w-1/3 rounded-lg shadow-md"
            />
            <img
              src="https://retail-merchandiser.com/wp-content/uploads/sites/8/2024/02/Pick-up-and-delivery-services-image.jpeg"
              alt="Logistics"
              className="w-1/3 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <section className="relative z-10 px-8 py-16 text-gray-800 bg-gray-100 md:px-20">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Why Choose Jiibly?
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="p-6 text-center transition transform border rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <img
              src="https://png.pngtree.com/png-clipart/20210905/original/pngtree-fast-delivery-poster-png-image_6690806.jpg"
              alt="Fast Delivery"
              className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="mb-2 text-xl font-semibold">Fast Delivery</h3>
            <p>Get your packages delivered on time, every time.</p>
          </div>
          <div className="p-6 text-center transition transform border rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <img
              src="https://www.hub-packaging.com/wp-content/uploads/2017/10/PRL10879HA_SG108HA_mailing_labelling_labels_warning_advisory_parcel_SA_handle_with_care_108mm_79mm.jpg"
              alt="Secure Service"
              className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="mb-2 text-xl font-semibold">Secure Service</h3>
            <p>Your items are handled with care and delivered safely.</p>
          </div>
          <div className="p-6 text-center transition transform border rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <img
              src="https://img.freepik.com/vecteurs-premium/24-7-support-icon-support-ligne-twenty-four-seven-vector_608466-89.jpg"
              alt="24/7 Support"
              className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="mb-2 text-xl font-semibold">24/7 Support</h3>
            <p>We’re here for you anytime you need assistance.</p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-gray-100 md:px-20">
        <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(review => (
            <div key={review._id} className="p-6 transition bg-white border rounded-lg shadow-md hover:shadow-lg">
              <p className="mb-4 text-lg text-black">
                {review.review}
              </p>
              <h4 className="font-bold text-black">{review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 text-white bg-gray-800">
        <div className="flex flex-col items-center justify-between px-6 mx-auto max-w-7xl md:flex-row">
          <p className="mb-4 md:mb-0">&copy; 2024 Jiibly. All Rights Reserved.</p>
          <div className="space-x-4">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;


