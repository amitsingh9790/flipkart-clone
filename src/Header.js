import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { MdExpandMore } from 'react-icons/md';
import "./Header.css"
import { NavLink, Outlet, useParams } from "react-router-dom";
const Header = ({ searchValue, onSearchChange, onSearch }) => {
    
    const { productId } = useParams();
    return (<>
        <div className="header">
            <div className="header_first">
                <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                    alt="flipkart logo" />
                <div className="header-first1">
                    <span style={{ fontSize: "11px", color: "white", fontStyle: "italic" }}>Explore</span>
                    <span style={{ color: "#f9e107", fontSize: "11px", fontStyle: "italic" }}>Plus</span>
                    <span>
                        <img width="10"
                            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                            alt="image" />
                    </span>
                </div>
            </div>
            <div className="header_second">
                <input type="text" placeholder="Seach for products" value={searchValue} onChange={(event) => onSearchChange(event.target.value)} />
                <NavLink to="/product_listing_page"><FaSearch style={{ color: "#2874f0", padding: "5px", fontSize: "25px" }} onClick={onSearch} /></NavLink>
            </div>
            <div className="header_third">
                <button><NavLink to="/login" style={{textDecoration:'none'}}>Login</NavLink></button>

            </div>
            <div className="header_fourth">
                <span>More</span>
                <MdExpandMore style={{ color: "white" }} />
            </div>

            <NavLink to={`cart/${productId}`} style={{textDecoration:'none'}} >
                <div className="header_fifth">
                    <FaCartPlus style={{ color: "white" }} />
                    <p>Cart</p>
                </div>
            </NavLink>
        </div>
        <Outlet />
    </>
    );
};

export default Header;          