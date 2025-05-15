import React, { useEffect } from 'react'
import { useState } from 'react';
import axiosInstance from '../api/axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Edit = () => {
   const { id } = useParams();
   const [formData, setFormData] = useState({
    name: '',
    category: '',
    image: ''
  });

  useEffect(()=>{ 
    const fetchProduct = async()=>{
      const res = await axiosInstance.get(`/product/${id}`);
      setFormData(res.data);
    };
    fetchProduct();
  },[id]);

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const res = await axiosInstance.put(`/product/${id}`, formData);
    if(res.status === 200){
      toast.success('Edited Successfully');
    }
    else{
        toast.error("Something went wrong while creating the product.");
      }
  }
  
  return (
    <div className='flex justify-center items-center min-h-screen bg-white'>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-3xl font-bold text-center py-4'>Edit Product</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Product Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a category</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Image URL"
          />
        </div>
        <button type='submit' className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Edit Product
        </button>
      </form>

    </div>
  )
}

export default Edit