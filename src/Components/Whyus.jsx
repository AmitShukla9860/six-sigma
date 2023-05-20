import React from "react";
import Bespoke from "../images/Bespoke.png";
import Quality from "../images/Best Quality.png";
import Price from "../images/Lowest Price.png";
import Trainers from "../images/Expert Trainers.png";


const Whyus = ()=>{
return(
    <>
    <div className="why">
    <div className="whyus">
        <div className="us">
        <h1>Why train with us?</h1>
        <p>At Six Sigma, we strive to offer the best training at the lowest price possible. Over 21 years of business, we have continued to provide high-quality training solutions to thousands of companies and businesses across the UK. Our trainers are industry experts who are highly experienced in planning and delivering quality management solutions using Six Sigma, Lean and Kaizen methodologies, and our courses are fully customisable to meet budgets, training needs and duration preferences. Our goal is to give you the best experience in the industry, which is why we have made our courses customisable for you, allowing you to ensure that you get the course that you require.</p>
        </div>
        <div className="cards">
            <div className="Bespoke">
                <img src={Bespoke} alt="" />
                <h3>Bespoke solutions</h3>
                <p>We work with your business to provide the perfect learning solution for your needs.</p>
            </div>
            <div className="Bespoke">
                <img src={Quality} alt="" />
                <h3>Best quality</h3>
                <p>Our course material is designed to be engaging and clear.</p>
            </div>
            <div className="Bespoke">
                <img src={Price} alt="" />
                <h3>Lowest price</h3>
                <p>We aim to provide maximum value and will beat any price on the market.</p>
            </div>
            <div className="Bespoke">
                <img src={Trainers} alt="" />
                <h3>Expert trainers</h3>
                <p>Our trainers are handpicked subject matter experts in Six Sigma and Lean methodologies.</p>
            </div>
        </div>
        <div className="viewbutton">
            <button>View dates and prices <span></span></button>
        </div>
    </div>
    </div>
    </>
)



}
export default Whyus;
