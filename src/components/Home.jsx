import React, { useEffect, useState } from 'react'
import PaginatedItems from './Paginated';

function Home() {
    let [products, setProducts] = useState([]);
    async function getAllProducts() {
        let data = await fetch('https://dummyjson.com/products?limit=50')
            .then(res => res.json())
        let { products } = data;
        products.sort((a, b) => b.rating - a.rating)

        setProducts(products);
    }
    useEffect(() => {
        getAllProducts();
    }, [])
    async function handleChange(e) {
        let { value } = e.target;
        if (value == '') return getAllProducts();
        let data = await fetch(`https://dummyjson.com/products/category/${value}`)
            .then(res => res.json())
        let { products } = data;
        products.sort((a, b) => b.rating - a.rating)

        setProducts(products);
    }
    return (
        <div className='flex flex-col p-4 text-center bg-green-300 text-lime-900'>
            <h1 className='font-bold text-3xl'>Available Products</h1>
            <section className='flex justify-center items-center'>
                <label htmlFor="category text-xl font-semibold">Category: </label>
                <select name="category" id="category" onChange={ handleChange } className='bg-inherit p-2 m-2 border-2 rounded-md hover:cursor-pointer border-green-500 focus:outline-green-600'>
                    <option value="">all</option>
                    { categories.map((cat, i) => (
                        <option key={ i } value={ cat }>{ cat }</option>
                    )) }
                </select>
            </section>
            { products.length > 0 && <PaginatedItems itemsPerPage={ 10 } items={ products } /> }



        </div>
    )
}

const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
]

export default Home


/**
 * brand
: 
"Apple"
category
: 
"smartphones"
description
: 
"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ..."
discountPercentage
: 
17.94
id
: 
2
images
: 
(4) ['https://i.dummyjson.com/data/products/2/1.jpg', 'https://i.dummyjson.com/data/products/2/2.jpg', 'https://i.dummyjson.com/data/products/2/3.jpg', 'https://i.dummyjson.com/data/products/2/thumbnail.jpg']
price
: 
899
rating
: 
4.44
stock
: 
34
thumbnail
: 
"https://i.dummyjson.com/data/products/2/thumbnail.jpg"
title
: 
"iPhone X"
 */