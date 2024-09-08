import { createContext, useState } from 'react'
import { ItemType } from '../utils/itemType'


interface ICartType {
    cart: ItemType[],
    total: number,
    add: (item: ItemType) => void,
    remove: (item: ItemType) => void,
}


export const CartContext = createContext<ICartType>({
    cart: [], total: 0, add: () => { }, remove: () => { },
})
export const CartProvider = ({ children }: React.PropsWithChildren) => {

    const [cart, setCart] = useState<ItemType[]>([])
    const [total, setTotal] = useState<number>(0)

    const random = Math.random() * 100

    function add(item: ItemType) {
        const newItem = { ...item, id: random }
        setCart([...cart, newItem])
        
        const totalCart = cart.reduce((total, product) => total + product.price, item.price);
        setTotal(totalCart);
    }

    function remove(item: ItemType) {
        const filteredCart = cart.filter((cartItem) => cartItem.id !== item.id)
        setCart(filteredCart)
        const totalCart = cart.find(product => product.id === item.id)?.price || 0
        setTotal(total - totalCart)
    }



    return (
        <CartContext.Provider value={{ cart: cart, total: total, add: add, remove: remove }}>
            {children}
        </CartContext.Provider>
    )
}

