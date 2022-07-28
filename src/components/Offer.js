import Meal from "./Meal";

const Offer = ({ index, category, cart, setCart }) => {
  return (
    <div className="">
      <h2>{category.name}</h2>
      <div className="meals-container">
        {category.meals.map((offer, index) => {
          return (
            <Meal
              key={index}
              index={index}
              offer={offer}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Offer;

// TRANSMETTRE EN PROPS cart et setCart à Meal
