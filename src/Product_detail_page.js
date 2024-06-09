import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Product_detail_page.css";
import { IoCartSharp, IoPersonCircleSharp } from 'react-icons/io5';
import { FaShoppingBag, FaStar, FaTag } from "react-icons/fa";
import { useParams } from "react-router";
import Data from "./Data";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Product_detail_page = () => {
    const { productId } = useParams();
    const { addToCart } = useCart();

    return (
        <div className="container">
            <div className="container_left" >
                <div className="product_image">
                    <img className="small_image"
                        src={Data[productId].image}
                        alt="" />
                </div>
                <div className="button_div">
                <Link to={`/cart/${productId}`} style={{textDecoration:'none'}}>
                <button type="button" class="btn btn-orange" onClick={()=> addToCart(productId)}><IoCartSharp className="iconbtn" /><span className="btntxt"> Add to cart</span></button>
                </Link>
                    <button type="button" class="btn btn-red"><FaShoppingBag className="iconbtn" /><span className="btntxt"> Buy Now</span></button>
                </div>
            </div>

            <div className="container_right">
                <p className="text-capitalize fs-5 ">{Data[productId].name}</p>
                <div className="text-capitalize "><span className="ratetext">2.33 <FaStar /></span><span className="text-muted ms-2">ratings & {Data[productId].reviews} reviews</span></div>
                <div className="textgreen">Special Price</div>
                <div className="price"><span className="fs-2 fw-bolder">Rs. {Data[productId].offerPrice} </span><span className="text-muted text-decoration-line-through">{Data[productId].actualPrice}</span><span className="fs-5 textgreen"> 11.76% </span></div>
                <h5>Stock: {Data[productId].stock}</h5>
                <h6 className="fs-5">Category: Electronics</h6>
                <table className="table_product">
                    <thread>
                        <tr>
                            <th className="th_product" colSpan="2"><div className="fs-5 darkcolor">Available Offers</div></th>
                        </tr>
                    </thread>
                    <tbody>
                        <tr>
                            <td className="td_product">
                                <div className="offersection"><FaTag className="textgreen" /> <span>Buy this Product and Get Extra ₹500 Off</span></div>
                                <div className="offersection"><FaTag className="textgreen" /> <span>Buy this Product and Get Extra 10% cashback</span></div>
                                <div className="offersection"><FaTag className="textgreen" /> <span>Bank OfferFlat ₹200 off on HDFC Bank Credit Card on 3 months EMI Txns, Min Txn Value ₹5,000</span></div>
                                <div className="offersection"><FaTag className="textgreen" /> <span>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*</span></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table>
                    <thread>
                        <tr>
                            <th className="th_product" colSpan="2"><div className="fs-5 darkcolor">Key Features</div></th>
                        </tr>
                    </thread>
                    <tbody>
                        <tr>
                            <td className="td_product">
                                <div>8 GB RAM | 128 ROM16.66cm (6,56 inch) HD + Display50MP+2MP | 8MP Front Camera5000 mAh Battery</div>
                                <div>6833</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table>
                    <thread>
                        <tr>
                            <th className="th_product" colSpan="2">
                                <div className="reviewsection">
                                    <span className="fs-5 darkcolor">Reviews And Ratings</span>
                                    <button type="button" class="btn btn-red"><span className="btntxt">Rate Product</span></button>
                                </div>
                            </th>
                        </tr>
                    </thread>
                    <tbody>
                        <tr>
                            <td className="td_product td-p">
                                <div className="text-capitalize"><IoPersonCircleSharp className="piccircle" /><span className="m-4">Amit singh</span><span className="ratetext">2.33 <FaStar /></span></div>
                                <div className="mt-3"> Good product</div>
                                {/* do map function agar bakend se review ho to  */}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table>
                    <thread>
                        <tr>
                            <th className="th_product" colSpan="2">
                                <div className="fs-5 darkcolor">Product Description</div>
                            </th>
                        </tr>
                    </thread>
                    <tbody>
                        <tr>
                            <td className="td_product">
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Reprehenderit veritatis nostrum nulla cupiditate commodi
                                    quasi quibusdam omnis sint facilis. Velit dicta eaque libero
                                    iusto debitis, eligendi officia aut animi culpa.
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

            </div>
        </div>
    )
}

export default Product_detail_page; 