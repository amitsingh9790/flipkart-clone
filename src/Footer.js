import Sell from "./images/sell-image.svg"
import Advertise from "./images/advertise-image.svg"
import GiftImage from "./images/gift-cards-image.svg"
import HelpCenter from "./images/help-centre-image.svg"
import PaymentMethod from "./images/payment-method.svg"
import "./Footer.css";

const Footer = () =>{
    return(
        <>
            <div className="f-main">
                <div className="f-top">
                    <div className="f-about">
                        <span className="f-heading">ABOUT</span>
                        <li className="f-text">Contact Us</li>
                        <li className="f-text">About Us</li>
                        <li className="f-text">Careers</li>
                        <li className="f-text">Flipkart Stories</li>
                        <li className="f-text">Press</li>
                        <li className="f-text">Flipkart Wholesale</li>
                        <li className="f-text">Cleartrip</li>
                        <li className="f-text">Corporate Information</li>
                    </div>
                    <div className="f-help">
                        <span className="f-heading">HELP</span>
                        <li className="f-text">Payments</li>
                        <li className="f-text">Shipping</li>
                        <li className="f-text">Cancellation & Returns</li>
                        <li className="f-text">FAQ</li>
                        <li className="f-text">Report Infringement</li>
                    </div>
                    <div className="f-consumer">
                        <span className="f-heading">CONSUMER POLICY</span>
                        <li className="f-text">Cancellation & Returns</li>
                        <li className="f-text">Terms Of Use</li>
                        <li className="f-text">Security</li>
                        <li className="f-text">Privacy</li>
                        <li className="f-text">Sitemap</li>
                        <li className="f-text">Grievance Redressal</li>
                        <li className="f-text">EPR Compliance</li>
                    </div>
                    <div className="f-social">
                        <span className="f-heading">SOCIAL</span>
                        <li className="f-text">Facebook</li>
                        <li className="f-text">Twitter</li>
                        <li className="f-text">YouTube</li>
                    </div>
                    <div className="f-top-border"></div>
                    <div className="f-mail">
                        <span className="f-heading">Mail Us!</span>
                        <li className="f-text">Flipkart Internet Private Limited,</li>
                        <li className="f-text">Building Alyssa, Begonia &</li>
                        <li className="f-text">Clove Embassy Tech Village,</li>
                        <li className="f-text">Outer Ring Road, Devarabeesanahalli Village,</li>
                        <li className="f-text">Bengaluru,560103,</li>
                        <li className="f-text">Karnataka, India</li>
                    </div>
                    <div className="f-address">
                        <span className="f-heading">Registered Office Address!</span>
                        <li className="f-text">Flipkart Internet Private Limited</li>
                        <li className="f-text">Buildings Alyssa, Begonia & </li>
                        <li className="f-text">Clove Embassy Tech Village,</li>
                        <li className="f-text">Outer Ring Road, Devarabeesanhalli Village,</li>
                        <li className="f-text">Bengaluru,560103</li>
                        <li className="f-text">Karnataka,India</li>
                        <li className="f-text">CIN : U51109KA2012PTC066107</li>
                        <li className="f-text">Telephone: 044-45614700</li>
                    </div>
                </div>
                <div className="f-bottom-border"></div>
                <div className="f-bottom">
                    <li className="f-text"><img src={Sell} alt="Sell Logo" />Become a Seller</li>
                    <li className="f-text"><img src={Advertise} alt="Advertise Logo" />Advertise</li>
                    <li className="f-text"><img src={GiftImage} alt="Gift Logo" />Gift Cards</li>
                    <li className="f-text"><img src={HelpCenter} alt="Help Logo" />Help Center</li>
                    <li className="f-text">© 2007-2024 Flipkart.com</li>
                    <li className="f-text"><img src={PaymentMethod} alt="payment logo" /></li>
                </div>
            </div>

        </>
    );
}

export default Footer;