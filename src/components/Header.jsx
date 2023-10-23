import CartButton from "./CartButton";
import ProductForm from "./ProductForm";

const Header = ({fetchProductsData}) => {
  return (
    <div className="header-container">
      <ProductForm fetchData={fetchProductsData} />
      <CartButton />
    </div>
  );
};

export default Header;
