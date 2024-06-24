import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";

import ProductDisplay from "../components/ProductDisplay";
import Item from "../components/Item";
import SimilarProducts from "../components/SimilarProducts";
import { backend_url } from "../context/ShopContext";

const Product = () => {
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([]);

  const { productId } = useParams();
  const [related_products, setRelated_products] = useState([]);

  // if (!product || !products || !related_products || !related_products.length) {
  //   return null
  // }

  useEffect(() => {
    fetch(`${backend_url}/product/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]);

  useEffect(() => {
    fetch("${backend_url}/allproducts")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  if (!product) {
    return (
      <div className="text-tertiary h-screen w-screen flex items-center justify-center">
        Product not found!
      </div>
    );
  }

  return (
    <section className="mx-auto">
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        {/* <ProductDescription /> */}
        <div className="description p-10 lg:p-20  bg-gray-10">
          <h2 className="text-xl font-bold py-4">Description:</h2>
          <p className="lg:w-[60%]"> {product.description}</p>
        </div>
        <SimilarProducts category={product.category} productId={productId} />
      </div>
    </section>
  );
};

export default Product;
