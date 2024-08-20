import Item from "./Item"
import Burguer1 from '../assets/hamburguer1.jpg'


const Food = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Item image={Burguer1} name="Bom Burguer" description="Pão de Trigo quentinho com carne artesanal com maionese e molho especial" price="15.90" />
            <Item image={Burguer1} name="Bom Burguer" description="Pão de Trigo quentinho com carne artesanal com maionese e molho especial" price="15.90" />
            <Item image={Burguer1} name="Bom Burguer" description="Pão de Trigo quentinho com carne artesanal com maionese e molho especial" price="15.90" />
            <Item image={Burguer1} name="Bom Burguer" description="Pão de Trigo quentinho com carne artesanal com maionese e molho especial" price="15.90" />
            <Item image={Burguer1} name="Bom Burguer" description="Pão de Trigo quentinho com carne artesanal com maionese e molho especial" price="15.90" />
            <Item image={Burguer1} name="Bom Burguer" description="Pão de Trigo quentinho com carne artesanal com maionese e molho especial" price="15.90" />
            <Item image={Burguer1} name="Bom Burguer" description="Pão de Trigo quentinho com carne artesanal com maionese e molho especial" price="15.90" />
            <Item image={Burguer1} name="Bom Burguer" description="Pão de Trigo quentinho com carne artesanal com maionese e molho especial" price="15.90" />
        </div>
  )
}

export default Food