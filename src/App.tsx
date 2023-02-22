import { useState } from 'react';

import { useProducts } from './hooks/products';

import CreateProduct from './components/CreateProduct';
import ErrorMessage from './components/ErrorMessage';
import Modal from './components/Modal';
import Product from './components/Product';
import { IProduct } from './models';

function App() {
  const { data, loading, error, addProduct } = useProducts();
  const [modal, setModal] = useState(true);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  };

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <p className='text-center'>Loading...</p>}
      {error && <ErrorMessage error={error} />}
      {data.map(product => (
        <Product key={product.id} product={product} />
      ))}

      {modal && (
        <Modal onClose={() => setModal(false)} title='Create new product'>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        onClick={() => setModal(true)}
        className='fixed bottom-5 right-5 bg-red-700 text-white py-2 px-4 text-2xl rounded-full outline-0'>
        +
      </button>
    </div>
  );
}

export default App;
