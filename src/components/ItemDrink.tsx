import { FaCartPlus } from "react-icons/fa"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { drinks } from "../services/drinks"

const ItemDrink = () => {
    const { add } = useContext(CartContext)
    return (
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 md:w-[80%] gap-7 mb-14">
          {drinks.map((e, index) => {
            return(
                <li key={index} className="flex items-center justify-center gap-5 px-7">
                                <img className="w-10 h-auto rounded-lg" src={e.image} alt="" />
                                <div className="w-full">
                                    <h3 className="font-semibold text-lg">{e.name}</h3>
                                    <p className="w-full text-sm md:text-base">{e.description}</p>
                                    <div className="w-full flex justify-between items-center mt-3">
                                        <h4 className="font-bold">R$ {e.price.toFixed(2)}</h4>
                                        <div onClick={() => add(e)} className="bg-gray-950 px-4 py-1 cursor-pointer rounded-md">
                                            <FaCartPlus className="text-white text-lg" />
                                        </div>
                                    </div>
                                </div>
                 </li>
            )
          })}  
        </ul>
    )
}


export default ItemDrink