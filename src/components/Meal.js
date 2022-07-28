const Meal = ({ index, offer, cart, setCart }) => {
  return (
    <article
      onClick={() => {
        console.log(offer);
        // Faire une copie du tableau carte

        const newCart = [...cart];

        const obj = {
          title: offer.title,
          price: offer.price,
        };
        // Ajouter (push) dans la copy offer
        newCart.push(obj);
        // mettre a jour le state cart avec setCart
        setCart(newCart);
      }}
    >
      <div className="text">
        <p>{offer.title}</p>
        <p>{offer.description}</p>
        <p>{offer.price}€</p>

        {offer.popular && <p className="popular">Popular</p>}
      </div>

      <img
        className="images"
        src={offer.picture}
        alt={"presentation du plat"}
      />
    </article>
  );
};

export default Meal;
