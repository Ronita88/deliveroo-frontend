import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./assets/img/logo.png";
import Offer from "./components/Offer";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-project-2022.herokuapp.com/"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <header>
        <img src={logo} alt="" />
      </header>

      <div className="hero">
        <div className="container hero-container">
          {/* pas besoin de renommer une div, un display flex juste pour aligner le bloc */}
          <div>
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>

          <img src={data.restaurant.picture} alt="" />
        </div>

        <main className="container ">
          <div className="category-left">
            {data.categories.map((category, index) => {
              return (
                category.meals.length !== 0 && (
                  <Offer
                    key={index}
                    index={index}
                    category={category}
                    cart={cart}
                    setCart={setCart}
                  />
                )
              );
            })}
          </div>
          <div className="category-right">
            <div>
              <button>Valider mon panier</button>
            </div>
            {cart.map((toAdd, index) => {
              return (
                <div key={toAdd.id}>
                  <p>{toAdd.title}</p>
                  <p>{toAdd.price} € </p>
                </div>
              );
            })}
            <p>Sous-total</p>

            <br />
            <p>Frais de livraison</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
