import React, { useState } from 'react';
import axios from 'axios';
import { IProduct } from '../models';
import ErrorMessage from './ErrorMessage';

const productData: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 12,
    count: 32
  }
};

interface ProductProps {
  onCreate: (product: IProduct) => void;
}

const CreateProduct = ({ onCreate }: ProductProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (value.trim().length === 0) {
      setError('Please, enter valid title');
      return;
    }
    productData.title = value;
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);

    onCreate(response.data);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className='mb-2 px-4 py-2 border w-full outline-0'
        type='text'
        placeholder='Enter product title...'
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button className='py-2 px-4 border rounded bg-yellow-400' type='submit'>
        Add product
      </button>
    </form>
  );
};

export default CreateProduct;
