import { useState } from "react";

type foodItem1 = {
  foodItem: {
    id: number;
    itemName: string;
    description: string;
    foodImage: string;
    price: number;
    isFavorite?: boolean;
  };
};

function MenuItem({ foodItem }: foodItem1) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section className="itemContainer">
      <figure>
        <img src={foodItem.foodImage} alt={foodItem.itemName} />
        <figcaption>
          <h2>{foodItem.itemName}</h2>
          <p>{foodItem.description}</p>
        </figcaption>
      </figure>
      <aside>{foodItem.price}EUR</aside>
      <button
        onClick={toggle}
        className={"toggle--button " + (isFavorite ? "toggle--close" : "")}
      >
        {isFavorite ? "❤️" : "🩶"}
      </button>
    </section>
  );
}

export default MenuItem;
