import Soda1 from "../assets/coca-cola.png"
import ItemDrink from "./ItemDrink"

const Drink = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:w-[80%] gap-7 mb-14">
            <ItemDrink image={Soda1} name="Coca Cola" price="15.90" />
            <ItemDrink image={Soda1} name="Coca Cola" price="15.90" />
        </div>
    )
}

export default Drink