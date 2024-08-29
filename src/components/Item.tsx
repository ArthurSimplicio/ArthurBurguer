import { FaCartPlus } from "react-icons/fa"
import { ItemType } from "../utils/itemType"
import Burguer from "../assets/hamburguer1.jpg"

const itens: Array<ItemType> = [
    { name: 'Bom Burguer', image: Burguer, price: 15.90, description: 'Pão de Trigo quentinho com carne artesanal com maionese e molho especial' },
    { name: 'Bom Burguer', image: Burguer, price: 15.90, description: 'Pão de Trigo quentinho com carne artesanal com maionese e molho especial' },
    { name: 'Bom Burguer', image: Burguer, price: 15.90, description: 'Pão de Trigo quentinho com carne artesanal com maionese e molho especial' },
    { name: 'Bom Burguer', image: Burguer, price: 15.90, description: 'Pão de Trigo quentinho com carne artesanal com maionese e molho especial' },
    { name: 'Bom Burguer', image: Burguer, price: 15.90, description: 'Pão de Trigo quentinho com carne artesanal com maionese e molho especial' },
    { name: 'Bom Burguer', image: Burguer, price: 15.90, description: 'Pão de Trigo quentinho com carne artesanal com maionese e molho especial' },
    { name: 'Bom Burguer', image: Burguer, price: 15.90, description: 'Pão de Trigo quentinho com carne artesanal com maionese e molho especial' },
    { name: 'Bom Burguer', image: Burguer, price: 15.90, description: 'Pão de Trigo quentinho com carne artesanal com maionese e molho especial' },
]
const Item = () => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {itens.map((e, index) => {
                return (
                    <li key={index} className="flex gap-2 hover:scale-105 hover:-rotate-1 duration-150">
                    <img className="w-28 h-28 rounded-lg" src={e.image} alt="" />
                    <div>
                        <h3 className="font-semibold text-lg">{e.name}</h3>
                        <p className="w-full text-sm md:text-base">{e.description}</p>
                        <div className=" flex justify-between items-center mt-3">
                            <h4 className="font-bold">R$ {e.price.toFixed(2)}</h4>
                            <div className="bg-gray-950 px-4 py-1 cursor-pointer rounded-md">
                                <FaCartPlus className="text-white text-lg"/>
                            </div>
            
                        </div>
                    </div>
                </li>
                )
            })}
        </ul>
    )
}

export default Item