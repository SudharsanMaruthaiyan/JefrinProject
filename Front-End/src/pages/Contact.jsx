import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (like sending an email or saving the data)
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="py-20 bg-blue-600 text-white pt-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full w-full hover:bg-yellow-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
