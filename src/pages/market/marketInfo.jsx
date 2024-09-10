import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MarketInfo = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.in/api/products');
                const data = await response.json();

                const products = Array.isArray(data) ? data : data.products;

                console.log(products);

                const foundProduct = products.find(product => product.id === parseInt(id));
                setProduct(foundProduct);
            } catch (error) {
                console.error('failed to fetch product:', error);
            }
        };

        fetchProductData();
    }, [id]);

    return (
        <div className="p-[-] bg-[#eff4fb] min-h-screen w-[80vw] mt-5 mx-auto md:me-3 rounded-xl flex flex-col">
            {product ? (
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-12 p-6 lg:p-12 rounded-lg'>
                    <div className='w-full lg:w-1/2'>
                        <img src={product.image} alt={product.title} className="w-full h-auto object-cover" />
                    </div>
                    <div className='flex flex-col text-start items-start justify-center gap-4 lg:w-1/2'>
                        <h1 className="text-2xl lg:text-3xl font-bold">{product.title}</h1>
                        <p className="text-gray-600 text-start"><span className='text-slate-600 font-bold'>Description:</span> <br /> {product.description}</p>
                        <p className="text-xl font-extrabold text-blue-600">${product.price.toFixed(2)}</p>
                        <p className="text-gray-600 text-start"><span className='text-black font-bold'>Category:</span> {product.category}</p>
                        <button className='w-full lg:w-48 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Buy</button>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default MarketInfo;
