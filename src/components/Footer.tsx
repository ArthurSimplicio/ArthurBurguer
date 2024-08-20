import { FaShoppingBasket } from "react-icons/fa";
const Footer = () => {
  return (
   <footer className="w-full fixed bottom-0 z-40 flex justify-center items-center bg-green-500 px-0 py-2">
    <button className="flex items-center text-white font-bold text-lg">
        <FaShoppingBasket />
        Ver Pedido
    </button>
   </footer>
  )
}

export default Footer