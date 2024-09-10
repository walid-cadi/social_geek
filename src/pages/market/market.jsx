import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import headphones from "../../assets/images/1.jpg";
import ps5 from "../../assets/images/2.jpg";
import phone from "../../assets/images/3.jpg";
import xbox from "../../assets/images/4.jpg";
import tv from "../../assets/images/5.jpg";
import { Button, Modal } from "flowbite-react";

const Market = () => {
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState(new Set());
  const [nameFilter, setNameFilter] = useState('');
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Electronics',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      let response = await fetch("https://fakestoreapi.in/api/products");
      let data = await response.json();

      if (Array.isArray(data.products)) {
        setProducts(data.products);
        setFilteredProducts(data.products);

        const uniqueCategories = [...new Set(data.products.map(product => product.category))];
        setCategories(uniqueCategories);
      } else {
        console.error(data);
      }
    };

    fetchProductData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = products;

      if (categoryFilters.size > 0) {
        filtered = filtered.filter(product => categoryFilters.has(product.category));
      }

      if (nameFilter) {
        filtered = filtered.filter(product => product.title.toLowerCase().includes(nameFilter.toLowerCase()));
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [categoryFilters, nameFilter, products]);

  const handleCategoryChange = (category) => {
    setCategoryFilters(prevFilters => {
      const updatedFilters = new Set(prevFilters);
      if (updatedFilters.has(category)) {
        updatedFilters.delete(category);
      } else {
        updatedFilters.add(category);
      }
      return updatedFilters;
    });
  };


  const handleFormChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (formData.name && formData.price && formData.image) {
      const newProduct = {
        id: products.length + 1,
        title: formData.name,
        price: parseFloat(formData.price),
        category: formData.category,
        image: imagePreview,
      };

      setProducts([newProduct, ...products]);
      setFilteredProducts([newProduct, ...filteredProducts]);

      setFormData({
        name: '',
        price: '',
        category: 'Electronics',
        image: null,
      });
      setImagePreview('');
      setOpenModal(false);
    } else {
      alert("Please fill out all fields and upload an image.");
    }
  };

  return (
<div className='flex flex-col w-[80vw] mx-auto'>
  <div className="w-[100%] lg:w-[80%] lg:p-5 p-0 mx-auto">
    <div className="h-[350px] mt-5 sm:h-64 xl:h-96">
      <Carousel>
        <img className='w-[100%] h-[350px]' src={headphones} alt="Headphones" />
        <img className='w-[100%] h-[350px]' src={ps5} alt="PS5" />
        <img className='w-[100%] h-[350px]' src={phone} alt="Phone" />
        <img className='w-[100%] h-[350px]' src={xbox} alt="Xbox" />
        <img className='w-[100%] h-[350px]' src={tv} alt="TV" />
      </Carousel>
    </div>
  </div>

  <div className="p-6 flex flex-col items-center mx-2">
    <div className="mb-4 flex items-start flex-col lg:flex-row lg:pe-52">
      <input
        type="text"
        placeholder="Type The Name of the Product"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        className="p-2 border rounded flex lg:left-[500px] w-full lg:w-[400px]"
      />
      <div>
        <Button className='lg:left-[200px] flex left-[80%] mt-5 lg:mt-0' onClick={() => setOpenModal(true)}>Add New Product</Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header></Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md mt-10">
                <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleFormChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleFormChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleFormChange}
                      className="mt-1 block w-full"
                    />
                    {imagePreview && (
                      <img src={imagePreview} alt="Preview" className="mt-2 w-full h-auto" />
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>

    <div className="mb-4 lg:pe-[30vw]">
      <h3 className="text-lg font-semibold">Categories:</h3>
      <div className="flex flex-wrap gap-4 mt-2">
        {categories.map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="checkbox"
              checked={categoryFilters.has(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </div>
    </div>

    <div className="p-6 pt-16 flex flex-wrap items-center justify-center mx-2">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-[290px] px-2 mb-4 hover:scale-95 duration-300"
            onClick={() => navigate(`/marketinfo/${product.id}`)}
          >
            <Card className="bg-white rounded-lg overflow-hidden shadow-2xl h-[350px]">
              <img
                className="h-[180px] pt-8 object-contain"
                src={product.image}
                alt={product.title}
              />
              <div className="p-6">
                <div className="flex items-baseline mb-2">
                  <span className="inline-block bg-teal-300 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                    New
                  </span>
                  <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                    {product.category}
                  </div>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                  {product.title}
                </h4>
                <div className="mt-1 flex items-baseline">
                  <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-gray-600 text-sm ml-2">/ MAD</span>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="text-teal-600 font-semibold">
                    <span>
                      <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
                    </span>
                  </span>
                </div>
              </div>
            </Card>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  </div>
</div>


  );
};

export default Market;
