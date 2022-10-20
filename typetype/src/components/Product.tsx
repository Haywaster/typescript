import { useState } from "react";
import { IProduct } from "../models";

interface PropductProps {
    product: IProduct;
}

export function Product({ product }: PropductProps) {
    const [detatils, setDetails] = useState(false);

    const btnBgClassName = detatils ? "bg-blue-400" : "bg-yellow-400";
    const btnClassName = ["border px-4 py-2", btnBgClassName];

    return (
        <div className="border py-2 px-4 flex flex-col items-center mb-2">
            <img className="w-1/6" src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button
                onClick={() => setDetails((prev) => !prev)}
                className={btnClassName.join(" ")}
            >
                {detatils ? "Hide details" : "Show details"}
            </button>
            {detatils && (
                <div>
                    <p>{product.description}</p>
                    <p>
                        Rate: <span className="font-bold">{product?.rating?.rate}</span>
                    </p>
                </div>
            )}
        </div>
    );
}
