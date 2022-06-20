import './index.css';
import { Item } from '../items/libs/Item';
export const Cart = (props) =>{
    const {itemsInCart, addToCart} = props;
    return <div className={"cart-root"}>
        {
        itemsInCart.map((item) => (
            <Item id={item.id} label={item.label} descr={item.descr} price={item.price} inCart={item.inCart} addToCart={addToCart}/>
        ))
        }
    </div>
}