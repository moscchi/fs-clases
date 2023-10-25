import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import InformativeModal from "./components/InformativeModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = async () => {
    const url = "https://6532fc12d80bd20280f632e8.mockapi.io/api/products";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  if (error) return <p>Hubo un error al cargar los productos.</p>;

  if (isLoading) return <p>Cargando...</p>;

  return (
    <>
      <CartProvider>
        <Header fetchProductsData={fetchProductsData}/>
        {products.length > 0 ? (
          <ProductList
            products={products}
            fetchProductsData={fetchProductsData}
          />
        ) : (
          <p>No hay productos para mostrar</p>
        )}
        <ToastContainer />
        <InformativeModal isOpen={isOpen} setIsOpen={setIsOpen} title={"Modal en app."} description={'Bienvenido a la pagina que acabamos de crear.'}/>
      </CartProvider>
    </>
  );
};

export default App;
