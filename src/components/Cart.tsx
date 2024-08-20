
const Cart = () => {
  return (
    <div className="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] hidden items-center justify-center">
        <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
            <h2 className="text-center font-bold text-2xl mb-2">Meu Pedido</h2>
            <div className="flex flex-col">
                <p className="font-bold">Total: 0.00</p>
                <p className="font-bold mt-4">Endereço de entrega:</p>
                <input className="border-2 my-1 p-1 rounded" type="text" placeholder="Digite o seu endreço"/>
                <p className="text-red-500 hidden">Digite seu Endereço Completo!</p>
                <div className="w-full flex justify-between items-center mt-5">
                    <button>Cancelar</button>
                    <button className="bg-green-500 text-white px-4 py-1 rounded">Fazer Pedido</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cart