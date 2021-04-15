import React, { useState, useEffect } from 'react';
import image from '../images/cleaningToolHero.jpg'
import image2 from '../images/cleaninghero.png'
import image3 from '../images/petbed.jpg'
import image4 from '../images/petHero.jpg'

const CategoryView = () => {

    const images = [(image) ,(image2),(image3),(image4)];
    const [count, setCount] = useState(0);

    const next = () => {
        setCount((i) => (i + 1) % images.length);
    };
    
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 1500);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
          <img className="category" src={images[count]} alt="" />
        
    )
}

export default CategoryView;
