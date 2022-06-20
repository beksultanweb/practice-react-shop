import './index.css';

export const Item = (props) =>{
    // const addToCart = (id) =>(
    //     const cartItemse = mockItems.map((item) => (
    //         if(item.key === id){
    //             return (...mockItems, inCart: !item.inCart);
    //         } else return item;
    //     ));
    //     setCart(cartItemse);
    // );
    const {id, label, descr, price, inCart, addToCart} = props;

    
    return <div className="item-root">
        <h5>{label}</h5>
        <div className="descr">{descr}</div>
        <div className="price">{price}$</div>
        <button onClick={() => addToCart(id)}>{inCart ? "Remove from cart" : "Add to cart"}</button>
    </div>
}