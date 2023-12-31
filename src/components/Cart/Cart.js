import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import Button from '../UI/Button';
import classes from'./Cart.module.css';
import CartCloseButton from './CartCloseButton';
import Modal from '../UI/Modal';
import CartItems from "./CartItems";
import axios from "axios";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [list, setList] = useState([]);
    const [price, setPrice] = useState(0);

    const newEmailId = localStorage.getItem('email')
       
        const fetch = async () => {
            const res = await axios.get(`https://crudcrud.com/api/71562618bffb4c31820bc73ff27bfa04/cart${newEmailId}`);
            
            const cartProduct = res.data;

            let tempPrice = 0;
            cartProduct.forEach((product) => {
                tempPrice += product.price * product.quantity;
            })

            setPrice(tempPrice);
            console.log(tempPrice);

            cartCtx.items = res.data;
            const quantity = res.data.reduce((currNum, item) => {
                return currNum + item.quantity
            }, 0);
            
            cartCtx.totalQuantity(quantity);
            setList(res.data);
            console.log(res.data);
            console.log(cartCtx.totalQuantity);
            console.log(quantity);
            console.log(cartCtx.items);
            
        }
        fetch()
    
    const cartItemsList = list.map((item) => (
        <ul key={props.id} id={props.id} className={classes.ul}>
            <CartItems product={item} />
        </ul>
    ));
    const purchaseHandler = () => {
        alert('Thanks for the purchasing');
        setList([])
    }
    
return(
    <Modal onClose={props.onClose}>
      <CartCloseButton className={classes.close} onClose={props.onClose} />
        <div className={classes.total}>
        <h2>My Tickets</h2>
        <div className={classes.wrapper}>
          <span className={classes.item}>TICKET</span>
          <span className={classes.price}>PRICE</span>
          <span className={classes.quantity}>COUNT</span>
          </div>
        <div>
            {cartItemsList}
            <span className={classes['cart-total']}>
                <span>Rs. {price}</span>
                <strong>Total</strong>
            </span>
        </div>
        <Button onClick={purchaseHandler}>Purchase Tickets</Button>
        </div>
    </Modal>
    );
};

export default Cart;