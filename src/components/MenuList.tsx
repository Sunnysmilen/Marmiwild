import MenuItem from "./MenuItem";

type foodItemsList = {
  setFoodItem: (name: string) => void;
  foodItemsList: foodItemsList[];
};

function MenuList({ foodItemsList }) {
  return (
    <>
      <MenuItem foodItem={foodItemsList} />
    </>
  );
}

export default MenuList;
