import ProductCard from "./ProductCard";

const ProductList = ({ products, fetchProductsData }) => {
  return (
    <>
      <h2>Lista de productos:</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            fetchProductsData={fetchProductsData}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
