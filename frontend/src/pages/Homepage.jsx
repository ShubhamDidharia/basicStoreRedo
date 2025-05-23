import React from 'react'
import { useState, useEffect } from 'react'
import axiosInstance from '../api/axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Homepage = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(()=>{
        const fetchProducts = async()=>{
            const res = await axiosInstance.get('/product');
            const allProducts = res.data;

            if (selectedCategory !== 'all') {
                setProducts(allProducts.filter(product => product.category === selectedCategory));
            } else {
                setProducts(allProducts);
            }
        };

        fetchProducts();
    },[selectedCategory]);

    const handleDelete = async(id)=>{
        const res = await axiosInstance.delete(`/product/${id}`);
        if(res.status === 200){
            setProducts(products.filter(products =>products._id !== id));
            toast.error('product deleted');
        }
    }
    
  return (
    <div className='min h-screen bg-white'>
        <div className="flex gap-4 mb-6 justify-center">
        {['all', 'fire', 'water', 'grass'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat ? 'bg-purple-600 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            {cat.toUpperCase()}
          </button>
            ))}
        </div>
        <h1 className='text-3xl font-bold text-center py-4'>Products</h1>
        <div className='grid grid-cols-3 gap-4 p-4'>
            {products.map(product=>(
                <div key={product._id} className='bg-white shadow-md rounded-lg p-2'>
                    <img src={product.image} alt={product.name} className='w-full h-48 object-contain rounded-t-lg'/>
                    <div className='flex justify-between items-center mt-2'>
                        <h2 className={`text-xl font-bold mt-2 bg-clip-text text-transparent ${product.category === 'fire'? ' bg-gradient-to-r from-red-400 to-orange-400':product.category === 'water' ? 'bg-gradient-to-r from-blue-400 to-violet-400' : ' bg-gradient-to-r from-emerald-500 to-lime-600'}`}>{product.name}</h2>
                        <p className={` capitalize font-bold text-md ${product.category === 'fire'? 'text-red-600' : product.category === 'water'? 'text-blue-600' : 'text-green-600'}`}>{product.category}</p>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                        <Link to = {`/edit/${product._id}`} className='bg-purple-500 text-white px-2 py-1 rounded shadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-200 ease-in-out'>
                        <svg className= 'h-8 w-8'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        </Link>
                        <button onClick={()=>handleDelete(product._id)}className='bg-red-500 text-white px-2 py-1 rounded shadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-200 ease-in-out'>
                        <svg className = 'h-8 w-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                        </button>
                        
                    </div>
              
                </div>
            ))}
        </div>

    </div>
  )
}

export default Homepage