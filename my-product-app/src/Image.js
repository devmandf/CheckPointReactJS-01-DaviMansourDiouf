// src/Image.js

import React from 'react';
import product from './product';

const Image = () => {
  return (
    <img 
      src={product.imagePath} 
      alt={product.name}
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: '200px',
        objectFit: 'contain'
      }}
    />
  );
};

export default Image;
