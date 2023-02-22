import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { IProduct } from '../models';

export function useProducts() {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addProduct = (product: IProduct) => {
    setData(prev => [...prev, product]);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
      setData(response.data);
      setLoading(false);
    } catch (e: unknown) {
      setLoading(false);
      const error = e as AxiosError;
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, addProduct };
}
