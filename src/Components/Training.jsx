import React from "react";
import img from '../images/stages-icon.svg';
import comp from '../images/Logo1578306949.svg';
import onlinec from '../images/online-course.svg';
const Training = ()=>{

    return(
        <>

        <div className="Training">

        <div className="heade">
        <h2>Lean Six Sigma training courses</h2>
        </div>
        <div className="contents">
            <div className="six">
                <h3>What is Lean Six Sigma?</h3>
                <div className="green_border"></div>
                <div className="yellow_border"></div>
                <p>Lean Six Sigma improves business processes by removing waste and reducing defects or mistakes. Using proven Japanese-inspired techniques to manufacture products and services which are better aligned to customer needs, Lean Six Sigma can help any business produce better work, improve profitability and reduce costs.</p>
                <p>The <b>methodology</b> is based around 8 types of waste:</p>

                <div className="waste">
                <div className="waste-1">
                <ul>
                <li><img src= {img} alt="" /> <span> Defects</span> </li>    
                <li><img src= {img} alt="" /> <span> Inventory</span> </li>    
                <li><img src= {img} alt="" /> <span> Non-Utilised Talents</span> </li>    
                <li><img src= {img} alt="" /> <span> Waiting</span> </li>
                </ul>
                </div>
                <div className="waste-2">
                <ul>
                <li><img src= {img} alt="" /> <span> Overproduction</span> </li>    
                <li><img src= {img} alt="" /> <span> Transportation</span> </li>    
                <li><img src= {img} alt="" /> <span> Extra Processing</span> </li>    
                <li><img src= {img} alt="" /> <span> Motion</span> </li>
                </ul>
                </div>
                </div>
            
            </div>
            <div className="six_1">
                <div className="yellow_belt">
                    <div className="comp">
                        <img src={comp} alt="" />
                        <h3>Lean Six Sigma Yellow Belt</h3>
                    </div>
                <p>The Lean Six Sigma Yellow Belt course has been created for professionals who want to get more familiar with the values of the Lean Six Sigma certification.</p>
                </div>
                <div className="green_belt">
                <div className="comp">
                        <img src={onlinec} alt="" />
                        <h3>Lean Six Sigma Green Belt</h3>
                    </div>
                <p>The Lean Six Sigma Yellow Belt course has been created for professionals who want to get more familiar with the values of the Lean Six Sigma certification.</p>
                </div>
                <div className="black_belt">
                <div className="comp">
                        <img src={onlinec} alt="" />
                        <h3>Lean Six Sigma Black Belt</h3>
                    </div>
                <p>The Lean Six Sigma Yellow Belt course has been created for professionals who want to get more familiar with the values of the Lean Six Sigma certification.</p>
                </div>
            </div>
        
            </div>
        </div>
        </>


    );

};

export default Training;