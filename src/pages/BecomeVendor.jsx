import React, { useState } from 'react';

const BecomeVendor = () => {
  const [formData, setFormData] = useState({
    vendorName: '',
    vendorEmail: '',
    vendorPhone: '',
    vendorAddress: '',
    brand: '',
    productCategory: '',
    otherCategory: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // You would handle the form submission here
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="vendorName" className="block text-sm font-medium text-gray-700">Vendor Name*</label>
          <input type="text" name="vendorName" value={formData.vendorName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="vendorEmail" className="block text-sm font-medium text-gray-700">Vendor Email*</label>
          <input type="email" name="vendorEmail" value={formData.vendorEmail} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="vendorPhone" className="block text-sm font-medium text-gray-700">Vendor Phone*</label>
          <input type="tel" name="vendorPhone" value={formData.vendorPhone} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="vendorAddress" className="block text-sm font-medium text-gray-700">Vendor Address*</label>
          <input type="text" name="vendorAddress" value={formData.vendorAddress} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
          <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">Product Category</label>
          <select name="productCategory" value={formData.productCategory} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select your Product Category</option>
            {/* Replace the following options with your actual categories */}
            <option value="category1">Gray Structure</option>
            <option value="category1">Concrete Materials</option>
            <option value="category1">SJ Steel</option>
            <option value="category1">Steel (سریا)e</option>
            <option value="category1">Tile Bond</option>
            <option value="category2">Agriculture (زراعت)</option>
            <option value="category1">Interior</option>
          </select>
        </div>
        <div>
          <label htmlFor="otherCategory" className="block text-sm font-medium text-gray-700">Other Category</label>
          <input type="text" name="otherCategory" value={formData.otherCategory} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button type="submit" className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#005F93] hover:bg-[#005173] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BecomeVendor;
