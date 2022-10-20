import { useProducts } from "../hooks/products";
import { Product } from "../components/Product";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/Error-message";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import { IProduct } from "../models";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

function ProductsPage() {
    const { products, loading, error, addProduct } = useProducts();
    const { modal, open, close } = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
            {modal && <Modal title="Create new product" onClose={close}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}
            <button
                className="fixed outline-none px-4 py-2 rounded-full text-white bg-red-500 right-5 bottom-5 text-2xl"
                onClick={open}>+</button>
        </div>
    );
}

export default ProductsPage;
