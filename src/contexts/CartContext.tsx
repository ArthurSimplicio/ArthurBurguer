import { createContext } from 'react'
import { itens } from '../services/itens'



export const CartContext = createContext({itens})

export const CartProvider = ({children}: React.PropsWithChildren) => {
   
    return (
        <CartContext.Provider value={{itens}}>
            {children}
        </CartContext.Provider>
    )
}