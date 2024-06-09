import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdStar } from "react-icons/md";
import Data from "../Data";
import ReactSlider from "react-slider";
import "./Cards.css";

const Cards = ({search}) => {
  const[minPriceRange, setminPriceRange] = useState(0);
  const[maxPriceRange, setmaxPriceRange] = useState(20000);
  const[valuemax,setValueMax] = useState(20000);
  const[valuemin,setValueMin] = useState(0);
  const handleChangeMax = (e) => {
    setValueMax(e.target.value);
    setmaxPriceRange(e.target.value);
  };
  const handleChangeMin = (e) => {
    setValueMin(e.target.value);
    setminPriceRange(e.target.value);
  };
  const handleSliderChange = (values) => {
    setValueMin(values[0]);
    setValueMax(values[1]);        
    setminPriceRange(values[0]);
    setmaxPriceRange(values[1]);
  };
  const [rating3,setRating3] = useState(0);
  const [rating4,setRating4] = useState(0);
  const [maxRating,setmaxRating] = useState(0);
  const ratingHandleChange = (e) => {
    const { value, checked } = e.target;
  
    let newRating3 = rating3;
    let newRating4 = rating4;
  
    if (value === "3") {
      newRating3 = checked ? 3 : 0;
    } else if (value === "4") {
      newRating4 = checked ? 4 : 0;
    }
  
    setRating3(newRating3);
    setRating4(newRating4);
    setmaxRating(newRating4 || newRating3);
  };

  return (

    <div className="mt-3">
      <div className="row">
        <div className="col-3">
          <form className="card-form">
            <h5>Filters</h5>
            <p>Price</p>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              value={[valuemin,valuemax]}
              max={20000}
              min={0}
              minDistance={1000}
              renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
              onChange={handleSliderChange}
            />            
           <br />
            <select value={valuemin} onChange={handleChangeMin}>
              <option value="0">Min</option>
              <option value="500">₹500</option>
              <option value="1000">₹1000</option>
              <option value="2000">₹2000</option>
              <option value="3000">₹3000</option>
            </select>
            
            <span> To </span>
            <select value={valuemax} onChange={handleChangeMax}>
              <option value="5000">₹5000</option>
              <option value="8000">₹8000</option>
              <option value="10000">₹10,000</option>
              <option value="15000">₹15,000</option>
              <option value="20000">Max</option>
            </select>
            <p>CUSTOMER RATINGS</p>
            <input type="checkbox" value="3" name="rating" onChange={ratingHandleChange}/> <label htmlFor="3"> 3 & above</label><br/>
            <input type="checkbox" value="4" name="rating" onChange={ratingHandleChange}/> <label htmlFor="4"> 4 & above</label>

            <p>Product Category</p>
            <input type="checkbox" value="1" name="category" /> <label htmlFor="1"> Electronics </label><br/>
            <input type="checkbox" value="2" name="category" /> <label htmlFor="2"> Man's Clothing </label><br/>
            <input type="checkbox" value="3" name="category" /> <label htmlFor="3"> Women's Clothing </label><br/>
          </form>
        </div>

        <div className="col">
          <div className="row Product_listed">
            {Data.filter((d)=>d.name.includes(search) && d.offerPrice >=minPriceRange && d.offerPrice <=maxPriceRange && d.rating>=maxRating).map((Sdata, idx) => {
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
                          <span style={{ backgroundColor: "green", color: "white", borderRadius: "3px", padding: "3px 6px" }} >{Sdata.rating} <MdStar />
                          </span>{" "}
                          <span> Reviews ({Sdata.reviews})</span>
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
