import React from "react";

const About = () => {
  return (
    <div className="py-8 bg-gray-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to [Your E-Commerce Site]! We are dedicated to providing you with the best products and services, with a focus on quality, customer service, and uniqueness.
        </p>
        <p className="text-gray-700 mb-4">
          Founded in [Year], [Your E-Commerce Site] has come a long way from its beginnings. When we first started, our passion for [Your Product/Service] drove us to start our own business.
        </p>
        <p className="text-gray-700 mb-4">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Team</h2>
        <p className="text-gray-700 mb-4">
          Our team is made up of dedicated professionals who are passionate about what they do. We work hard to ensure that we meet your expectations every time you shop with us.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          Our mission is to provide our customers with the highest quality products and services, while also ensuring that we have a positive impact on the community and the environment.
        </p>
      </div>
    </div>
  );
};

export default About;
