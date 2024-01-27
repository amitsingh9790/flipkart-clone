import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdStar } from "react-icons/md";
import Data from "../Data";
import "./Cards.css";

const Cards = ({search}) => {
  const[minPriceRange, setminPriceRange] = useState(0);

  const handleminRangeChange = (event) => {
    setminPriceRange(event.target.value);
  }
  const[maxPriceRange, setmaxPriceRange] = useState(20000);

  const handlemaxRangeChange = (event) => {
    setmaxPriceRange(event.target.value);
  }

  return (

    <div className="mt-3">
      <div className="row">
        <div className="col-3">
          <form>
            <h5>Filters</h5>
            <p>Price</p>
            <div className="slider-container">
              <input type="range" className="range-min" min="0" max="20000" value={minPriceRange} onChange={handleminRangeChange}/>
              <input type="range" className="range-max" min="0" max="20000" value={maxPriceRange} onChange={handlemaxRangeChange}/>
            </div>
            <br />
            <select>
              <option value={minPriceRange}>0</option>
              <option value="1000">1000</option>
              <option value="2000">5000</option>
              <option value="3000">10000</option>
            </select>
            <span> To </span>
            <select>
              <option value="1000">1000</option>
              <option value="2000">5000</option>
              <option value="3000">10000</option>
              <option value="5000">20000</option>
            </select>
            <p>CUSTOMER RATINGS</p>
            <input type="checkbox" value="1" /> <label htmlFor="1"> 1 and above</label><br/>
            <input type="checkbox" value="2" /> <label htmlFor="2"> 2 and above</label><br/>
            <input type="checkbox" value="3" /> <label htmlFor="3"> 3 and above</label><br/>
            <input type="checkbox" value="4" /> <label htmlFor="4"> 4 and above</label><br/>

            <p>Product Category</p>
            <input type="checkbox" value="electronics" /> <label htmlFor="1"> Electronics </label><br/>
            <input type="checkbox" value="2" /> <label htmlFor="2"> Shoes </label><br/>
            <input type="checkbox" value="3" /> <label htmlFor="3"> Women's Clothing </label><br/>
          </form>
        </div>

        <div className="col">
          <div className="row">
            {Data.filter((d)=>d.name.includes(search) && d.actualPrice >=minPriceRange && d.actualPrice <=maxPriceRange).map((Sdata, idx) => {
                return (
                  <div  className="col-md-4 mb-4" key={idx}>
                   <Link to={`/product_detail_page/${Sdata.id}`} style={{textDecoration:'none'}}>
                    <div className="card"> 
                      <img
                        src={Sdata.image}
                        className="card-img-top"
                        alt="Product"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{Sdata.name}</h5>
                        <p className="card-text">
                          <span style={{ backgroundColor: "green", color: "white", borderRadius: "3px", padding: "3px 6px" }} >4 <MdStar />
                          </span>{" "}
                          <span> Reviews ({Sdata.rating})</span>
                        </p>
                        <p className="card-text d-flex justify-content-between align-items-center mb-2">
                          <span style={{ fontWeight: "bold", color: "black" }}>
                            Rs. {Sdata.offerPrice}{" "}
                          </span>
                          <span>Rs. {Sdata.actualPrice}</span>
                          <span style={{ color: "green" }}>{99}%</span>
                        </p>
                      </div>
                    </div>
                   </Link>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>


    </div>
  );
};

export default Cards;
