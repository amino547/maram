import React, { useEffect, useState } from 'react';
import { getAboutItems } from '../services/api1';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [aboutItems, setAboutItems] = useState([]);

  useEffect(() => {
    const fetchAboutItems = async () => {
      const items = await getAboutItems();
      setAboutItems(items);
    };

    fetchAboutItems();
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Slider Section */}
      <SliderSection />

      {/* Call to Action */}
      <CallToAction />

      {/* Display About Items */}
      <div className="py-12 bg-gray-100">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">About Items</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {aboutItems.map((item) => (
              <AboutItem key={item._id} item={item} />
            ))}
          </div>
          <Link to="/create-about" className="inline-block px-8 py-3 mt-8 font-bold text-white transition bg-blue-500 rounded-lg hover:bg-blue-600">
            Create New About Item
          </Link>
        </div>
      </div>
    </div>
  );
};

const AboutItem = ({ item }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <img
      src={item.imageUrl}
      alt={item.title}
      className="object-cover w-full h-48 mb-4 rounded-md"
    />
    <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
    <p className="text-gray-600">{item.description}</p>
  </div>
);

const HeroSection = () => (
  <div className="relative py-16 text-white bg-gradient-to-r from-blue-600 to-purple-600">
    <img
      src="https://media.licdn.com/dms/image/v2/D4D12AQGpybSVf8TqOg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1680352950026?e=2147483647&v=beta&t=YsIZBVuRdAT0bhvfD8D1s58EmAOwHDpao0v2m_cDVsU"
      alt="Delivery logistics"
      className="absolute inset-0 object-cover w-full h-full opacity-30"
    />
    <div className="relative z-10 max-w-6xl mx-auto text-center">
      <h1 className="mb-4 text-5xl font-bold">About Jiibly</h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl">
        At Jiibly, we provide top-notch delivery services with speed, reliability, and professionalism. Our mission is to connect people through the power of efficient logistics.
      </p>
    </div>
  </div>
);

const HowItWorksSection = () => (
  <div className="py-12 bg-gray-100">
    <div className="mx-auto text-center max-w-7xl">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">How It Works</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </div>
  </div>
);

const StepCard = ({ imgSrc, altText, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <img
      src={imgSrc}
      alt={altText}
      className="object-cover w-full h-48 mb-4 rounded-md"
    />
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const steps = [
  {
    imgSrc: "https://www.econonord.com/wp-content/uploads/2016/05/AdobeStock_55569182.jpeg",
    altText: "Pickup",
    title: "Step 1: Pickup",
    description: "We pick up your package from your specified location, ensuring a smooth start to the process."
  },
  {
    imgSrc: "https://img.freepik.com/premium-photo/sorting-center-boxes-parcels-moving-along-conveyor-belt-dispatch-concept-logistics-sorting-center-conveyor-belt-boxes-parcels_918839-235464.jpg",
    altText: "Sorting",
    title: "Step 2: Sorting & Dispatch",
    description: "Your package is sorted and sent to its destination with our advanced logistics system."
  },
  {
    imgSrc: "https://d23xypyp2dkdqm.cloudfront.net/wp-content/uploads/2022/01/31034059/woman-hand-accepting-delivery-boxes-from-deliveryman-1-1024x683.jpg",
    altText: "Delivery",
    title: "Step 3: Delivery",
    description: "The package is delivered safely to its destination, ensuring satisfaction for all."
  }
];

const WhyChooseUsSection = () => (
  <div className="py-16 bg-gradient-to-b from-blue-100 to-blue-200">
    <div className="mx-auto text-center max-w-7xl">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Why Choose Jiibly?</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="p-6 transition transform bg-white rounded-lg shadow-md hover:scale-105">
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const features = [
  {
    title: "Reliable Service",
    description: "Timely and secure deliveries you can count on."
  },
  {
    title: "Affordable Rates",
    description: "Cost-effective solutions tailored to your needs."
  },
  {
    title: "24/7 Support",
    description: "Friendly customer service whenever you need us."
  }
];

const SliderSection = () => (
  <div className="py-16 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Our Partners in Logistics</h2>
      <div className="relative overflow-hidden">
        <div className="flex space-x-6">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.imgSrc}
              alt={partner.altText}
              className="object-cover w-64 rounded-lg shadow-md h-36"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const partners = [
  {
    imgSrc: "https://www.onerail.com/wp-content/uploads/2024/05/outsourced-delivery.jpg",
    altText: "Fleet"
  },
  {
    imgSrc: "https://cdn-ilaeadh.nitrocdn.com/UnAFfTqfoHKRwMhikRtSYtATXULTzYKf/assets/images/optimized/rev-af5d355/www.amsc-usa.com/wp-content/uploads/2023/07/a-warehouse-full-of-goods-and-services.jpg",
    altText: "Warehouse"
  },
  {
    imgSrc: "https://etimg.etb2bimg.com/photo/77717851.cms",
    altText: "Delivery truck"
  }
];

const CallToAction = () => (
  <div className="py-16 text-center text-white bg-gray-800">
    <h2 className="mb-4 text-4xl font-bold">Ready to Experience Jiibly?</h2>
    <p className="mb-6 text-lg">Sign up today to start your hassle-free delivery journey.</p>
    <a
      href="/register"
      className="inline-block px-8 py-3 font-bold text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
    >
      Get Started
    </a>
  </div>
);

export default AboutPage;

