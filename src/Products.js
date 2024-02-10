import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setItems(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) return <div className='load'><h1>Please wait the page is loading</h1></div>;
    if (error) return <div>Error: {error}</div>;
    console.log(items)
    return (
        <div id='home'>
            <div className='cardHolder'>
                {items.map(item => (
                    <div className='card' key={item.id}>
                        <div>
                        <img src={item.image} alt='' />
                        </div>
                        <div className='cardContent'>
                        <h4>{item.title}</h4>
                        <h3> Price : {item.price} &#x20B9;</h3>
                        <span> Only {item.rating.count} in stock</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
