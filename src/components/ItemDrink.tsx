import { FaCartPlus } from "react-icons/fa"
import { ItemType } from "../utils/itemType"

const ItemDrink = ({name, description, price, image}: ItemType) => {
    return (
      <div className="flex items-center justify-center gap-5 px-7">
          <img className="w-10 h-auto rounded-lg" src={image} alt="" />
          <div className="w-full">
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="w-full text-sm md:text-base">{description}</p>
              <div className="w-full flex justify-between items-center mt-3">
                  <h4 className="font-bold">R$ {price.toFixed(2)}</h4>
                  <div className="bg-gray-950 px-4 py-1 cursor-pointer rounded-md">
                      <FaCartPlus className="text-white text-lg"/>
                  </div>
  
              </div>
          </div>
      </div>
    )
  }
  export default ItemDrink