import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
    <div className="home__container">
      <Banner />
      <div className="home__container-description">
        <h1>Bienvenido a The Office</h1>
        <h4>Trabaja con confianza</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in perspiciatis aliquid veniam aperiam iusto aliquam vel iure fuga excepturi quos, cupiditate, ullam voluptate facere repellat quaerat dolorum harum dolorem?</p>
      </div>
    </div>
  );
};

export default Home;
