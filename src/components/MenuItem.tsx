type foodItem1 = {
    foodItem: {
      id: number;
      itemName: string;
      description: string;
      foodImage: string;
      price: number;
      isFavorite?: boolean;
    };
  

function menuItem({ foodItem }: foodItem1) {
  return (
    <section>
      <figure>
        <img src={foodItem.foodImage} alt={foodItem.itemName} />
        <figcaption>
          <h2>{foodItem.itemName}</h2>
          <p>{foodItem.description}</p>
        </figcaption>
      </figure>
      <aside>{foodItem.price} EUR</aside>
      <button type="button">{foodItem.isFavorite}</button>
    </section>
  );
}
export default menuItem;
