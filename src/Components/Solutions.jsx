import React from "react";
import solution from'../images/Solutions.png';
import call from '../images/call-icon.svg';

const Solutions =()=>{
    return(
        <>
        <div className="Solutions">
            <div className="heading">
                <h1>Solutions for business</h1>
            </div>
            <div className="content">
            <div className="para">
                <p>We’ll help you find your perfect 6 Sigma training solution. We know that the best results require a customised approach. That’s why we’re committed to understanding your needs and how your business works, before developing relevant training tailored to your industry and goals. We can deliver custom Six Sigma and Lean solutions onsite at your offices or a venue of your choice, covering the topics most important to your organisation.</p>
                <p>Are you looking for a more substantial training programme? No problem, talk to us about what you’re looking for – we can even create bespoke content just for you.</p>
                <button>Get more info</button>
            </div>
            <div className="solu">
                <img src={solution} alt="" />
                </div>
            </div>
        </div>
        <div className="let_us">
            <div className="know">
                <h2>Let us know what you’re looking for</h2>
                <p>Talk to one of our advisors about your training needs.</p>
            </div>
            <div className="call_us">
                <div className="call_icon">
                    <img src={call} alt="" />
                </div>
                <div className="call_num">
                    <h2>+442036084550</h2>
                    <p>Give us a call</p>
                </div>
            </div>
        </div>
        <div className="side_contact">
            <div className="phon">
            <i class='fas fa-phone-alt'></i>
            </div>
            <div className="phon">
            <i class='far fa-comments'></i>
            </div>
            <div className="phon">
            <i class='fas fa-envelope'></i>
            </div>
        </div>   
        
        </>
    )
}
export default Solutions;