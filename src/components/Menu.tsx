import Cart from "./Cart"
import Drink from "./Drink"
import Item from "./Item"

const Menu = () => {
  return (
    <>
    <section className="w-full mt-6 px-3 gap-7 flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl">Veja nossos sabores</h1>
        <Item />
        <h4 className="font-bold text-2xl">Bebidas</h4>
        <Drink />
    </section>
        <Cart isCartOpen={false} />
    </>
)
}

export default Menu