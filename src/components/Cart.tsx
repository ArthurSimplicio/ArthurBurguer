import { useState, useContext } from "react"
import { FaShoppingBasket } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";
import Empty from '../assets/vazio.png'



const Cart = ({ isCartOpen = false }) => {
  const { cart, remove, total } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(isCartOpen)
  const [address, setAddress] = useState<string | undefined>('')
  const handleIsOpen = () => {
    setIsOpen(value => !value)
  }
  const hasItem = cart.length > 0
  const hasAddress = address !== ''

  function changedAddress(e: React.ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value)
  }
  function buy(){
    if(!hasAddress) return;

    const cartItens = cart.map((e) => {
      return(
        `${e.name} Preço: ${e.price} | `
      )
    }).join("")
    const message = encodeURIComponent(cartItens)
    const phone = "85981724898"
    window.open(`https://wa.me/${phone}?text=${message} Endereço: ${address} Total: R$${total.toFixed(2)}`, '_blank')
  }
  return (
    <>
      <div className={isOpen ? 'block' : 'hidden'}>
        <div className={"bg-black/60 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center duration-150"}>
          {cart.length > 0 ? <div className={"bg-black/60 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center duration-150"}>

            <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
              <h2 className="text-center font-bold text-2xl mb-2">Meu Pedido</h2>
              <div className="flex flex-col">
                {cart.map((e) => {
                  return (
                    <ul>
                      <li key={e.id} className="flex w-full justify-between mb-1">
                        <p className="font-bold"> {e.name}</p>
                        <div className="flex gap-2">
                          <p className="font-bold">R${e.price.toFixed(2)}</p>
                          <button onClick={() => remove(e)} className="font-bold px-3 rounded text-white bg-red-500">X</button>
                        </div>
                      </li>
                    </ul>
                  )
                })}
                <p className="w-full flex justify-between  font-bold">Total: <span>R$ {total.toFixed(2)}</span></p>
                <p className="font-bold mt-4">Endereço de entrega:</p>
                <input className="border-2 my-1 p-1 rounded" type="text" name="address" placeholder="Digite o seu endreço" value={address} onChange={changedAddress} />
                <p className={!hasAddress ? "text-red-500" : "hidden" }>Digite seu Endereço Completo!</p>
                <div className="w-full flex justify-between items-center mt-5">
                  <button onClick={handleIsOpen}>Cancelar</button>
                  <button onClick={buy} className="bg-green-500 text-white px-4 py-1 rounded">Fazer Pedido</button>
                </div>
              </div>
            </div>


          </div> 
          : <div className="bg-slate-100 p-5 rounded-md min-w-[90%] md:min-w-[600px] flex flex-col items-center">
            <h2 className="text-center font-bold text-2xl mb-2">Seu carrinho está vázio</h2>
            <img className="w-44 md:w-80" src={Empty} alt="" />
            <div className="w-full flex justify-between">
              <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={handleIsOpen}>Voltar</button>
              <p className="font-bold">Vamos Comprar!</p>
            </div>
          </div>}


        </div>

      </div>
      <footer onClick={handleIsOpen} className="w-full fixed bottom-0 z-40 flex justify-center items-center bg-green-500 px-0 py-2 rounded-lg cursor-pointer">
        <div className={hasItem ? 'flex' : 'hidden'}>
          <div className="bg-red-500 text-yellow-200 font-semibold px-1 rounded-full">
            {cart.length}
          </div>
        </div>
        <div  className="flex items-center text-white font-bold text-lg">
          <FaShoppingBasket />
          Ver Pedido
        </div>
      </footer>
    </>
  )
}

export default Cart