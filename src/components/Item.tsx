import {ItemType } from "../utils/itemType"
import { FaCartPlus } from "react-icons/fa";



const Item = ({name, description, price, image}: ItemType) => {
  return (
    <div className="flex gap-2 hover:scale-105 hover:-rotate-1 duration-150">
        <img className="w-28 h-28 rounded-lg" src={image} alt="" />
        <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="w-full text-sm md:text-base">{description}</p>
            <div className=" flex justify-between items-center mt-3">
                <h4 className="font-bold">R$ {price}</h4>
                <div className="bg-gray-950 px-4 py-1 cursor-pointer rounded-md">
                    <FaCartPlus className="text-white text-lg"/>
                </div>

            </div>
        </div>
    </div>
  )
}


export default Item
