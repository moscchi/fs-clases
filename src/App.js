import "./App.css";
import ThemeProvider from "./Context/ThemeContext";
import Header from "./Components/Header";
import ContainerProductos from "./Components/ContainerProductos";
import UserProvider from "./Context/UserContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <Header />
          <ContainerProductos />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
