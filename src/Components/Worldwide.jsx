import React from "react";
import location from '../images/location.svg';
import large1 from '../images/large_1572929555.jpg';
import large2 from '../images/large_1572929651.jpg';
import large3 from '../images/large_1572929690.jpg';

const World =()=>{
    return(
        <>
        <div className="worldwide">
            <div className="head">
                <h1>Six Sigma worldwide</h1>
            </div>
            <div className="conte">
            <div className="location">
            <div className="world_content">
                <p>Our Six Sigma, Lean and Kaizen classroom training is available in major locations, towns and cities across the UK. Here’s where we get the most demand.</p>
            </div>
                <div className="location_1">
                    <div className="lond">
                    <img src={location} alt="" />
                    <h3>London</h3>
                    </div>
                    <div className="lond">
                    <img src={location} alt="" />
                    <h3>Birmingham</h3>
                    </div>
                    <div className="lond">
                    <img src={location} alt="" />
                    <h3>Manchester</h3>
                    </div>
                    <div className="lond">
                    <img src={location} alt="" />
                    <h3>Aberdeen</h3>
                    </div>
                    <div className="lond">
                    <img src={location} alt="" />
                    <h3>Belfast</h3>
                    </div>
                    <div className="lond">
                    <img src={location} alt="" />
                    <h3>Brighton</h3>
                    </div>
                </div>
                <div className="location_2">
                <div className="lond">
                    <img src={location} alt="" />
                    <h3>Bristol</h3>
                    </div>
                    <div className="lond">
                    <img src={location} alt="" />
                    <h3>Cambridge</h3>
                    </div>
                    <div className="lond">
                    <img src={location} alt="" />
                    <h3>Cardiff</h3>
                    </div>
                    <div className="lond">
                    <img src={location} alt="" />
                    <h3>Dublin</h3>
                    </div>
                    <div className="lond">
                    <img src={location} alt="" />
                    <h3>Edinburgh</h3>
                    </div>
                    <div className="lond">
                    <img src={location} alt="" />
                    <h3>Glasgow</h3>
                    </div>
                </div>
                <div className="All_locations">
                    <button>View all locations</button>
                </div>
            </div>
            <div className="Blogs">
            <div className="recent">
                <h2>Recent Blogs</h2>
            </div>
            <div className="green_border"></div>
            <div className="yellow_border"></div>
            <div className="news">
                <div className="new">
                <div className="news_1">
                    <img src={large1} alt="" />
                    <p>Which Game of Thrones Character is the Best Project Manager?</p>
                </div>
                <div className="date__1">
                    <p>2017-06-16</p>
                    <h4>Read More</h4>
                </div>
                <div className="news_1">
                    <img src={large2} alt="" />
                    <p>Which Game of Thrones Character is the Best Project Manager?</p>
                </div>
                <div className="date__1">
                    <p>2017-06-16</p>
                    <h4>Read More</h4>
                </div>
                <div className="news_2">
                    <img src={large3} alt="" />
                    <p>Which Game of Thrones Character is the Best Project Manager?</p>
                </div>
                <div className="date__2">
                    <p>2017-06-16</p>
                    <h4>Read More</h4>
                </div>
                <div className="view_blog">
                <button>View all blogs</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        
        </>
    )
}

export default World;