import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import classes from './ProductDetail.module.css';
import { AiFillStar } from "react-icons/ai";

const ProductDetail = () => {
    const location = useLocation();
    const {data} = location.state;

    const imageUrl = [
        {url: '/images/img1.jpg'},
        {url: '/images/img2.jpg'},
        {url: '/images/img3.jpg'},
        {url: '/images/img4.jpg'},
        {url: '/images/img5.jpg'},
    ];

    return (
        <Fragment>
            <div className={classes.product}>
                <div className={classes.wrapper}>
                    {imageUrl.map((item) => (
                        <img
                            className={classes['product-img-list']}
                            src={item.url}
                            alt='imgs'
                        />
                    ))}
                </div>
                <img
                    src={data.imageUrl}
                    alt='product-imgs'
                    className={classes['product-img']}
                />
                <div className={classes['product-details']}>
                    <h1>{data.title}</h1>
                    <p style={{ color: 'black' }}>${data.price}</p>
                    <div className={classes['product-rating']}>
                        4.3 <AiFillStar />
                    </div>
                    <p>
                        BMw Car a type of car having a advanced feature of mor technology.
                    </p>
                    <h3>Reviews</h3>
                        <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat</li>
                        <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat</li>
                        <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat</li>
                        <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat</li>
                    </div>
            </div>
        </Fragment>
        
    )
};

export default ProductDetail;