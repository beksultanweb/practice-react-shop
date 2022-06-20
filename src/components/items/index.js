import './index.css';
import {Item} from './libs/Item';



export const Items = (props) =>{
    const {itemsInShop, addToCart} = props;
    return <div className={'items-root'}>
        {
        itemsInShop.map((item) => (
            <Item id={item.id} label={item.label} descr={item.descr} price={item.price} inCart={item.inCart} addToCart={addToCart}/>
        ))
        }
    </div>
}

//