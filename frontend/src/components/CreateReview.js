// src/components/CreateReview.js
import React, { useState } from 'react';
import { createReview } from '../services/api';

const CreateReview = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reviewData = { name, review };
      await createReview(reviewData);
      alert('Review created successfully!');
      setName('');
      setReview('');
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-4 mx-auto bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="review">
          Review
        </label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateReview;
