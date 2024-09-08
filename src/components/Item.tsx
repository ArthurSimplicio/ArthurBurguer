import { FaCartPlus } from "react-icons/fa"
import { itens } from '../services/itens'
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";


const Item = () => {
    const { add } = useContext(CartContext)

    console.log(itens);

    return (
        <ul className="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
            {itens.map((e, index) => {
                return (
                    <li key={index} className="flex gap-2 hover:scale-105 hover:-rotate-1 duration-150">
                        <img className="w-28 h-28 rounded-lg" src={e.image} alt="" />
                        <div>
                            <h3 className="font-semibold text-lg">{e.name}</h3>
                            <p className="w-full text-sm md:text-base">{e.description}</p>
                            <div className=" flex justify-between items-center mt-3">
                                <h4 className="font-bold">R$ {e.price.toFixed(2)}</h4>
                                <button onClick={() => {
                                    add(e);
                                   
                                }
                                } className="bg-gray-950 px-4 py-1 cursor-pointer rounded-md">
                                    <FaCartPlus className="text-white text-lg" />
                                </button>

                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Item