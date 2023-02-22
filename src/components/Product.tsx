import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);

  const bntBgColor = details ? 'bg-blue-400' : 'bg-yellow-400';
  const bntStyles = ['py-2 px-4 border outline-none', bntBgColor];

  return (
    <div className='border flex flex-col items-center mb-5 rounded'>
      <img className='w-1/6' src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p className='font-bold'>{product.price}</p>
      <button onClick={() => setDetails(prev => !prev)} className={bntStyles.join(' ')}>
        {!details ? 'Show' : 'Hide'} details
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate: <span className='font-bold'>{product.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Product;
