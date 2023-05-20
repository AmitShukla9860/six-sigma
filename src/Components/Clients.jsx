import React from "react";
import health from'../images/health.svg';
import charity from'../images/charity.svg';
import university from'../images/university.svg';
import transport from'../images/transport.svg';
import finance from'../images/finance.svg';
import footer from'../images/white-logo.png';
import facebook from '../images/facebook.svg';
import gmail from '../images/gmail.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';


const Client=()=>{
    return(
        <>
        <div className="our_clients">
            
            <div className="clients">
                <h2>Our Clients</h2>
            </div>
            <div className="client">
                <div className="client_1">
                    <div className="client_2">
                    <img src={health} alt="" />
                    </div>
                    <div className="letter">
                    <p>National Health Services</p>
                    </div>
                </div>
                <div className="client_1">
                    <div className="client_2">
                    <img src={charity} alt="" />
                    </div>
                    <div className="letter">
                    <p>Charities</p>
                    </div>
                </div>
                <div className="client_1">
                    <div className="client_2">
                    <img src={university} alt="" />
                    </div>
                    <div className="letter">
                    <p>Universities</p>
                    </div>
                </div>
                <div className="client_1">
                    <div className="client_2">
                    <img src={transport} alt="" />
                    </div>
                    <div className="letter">
                    <p>Transportation</p>
                    </div>
                </div>
                <div className="client_1">
                    <div className="client_2">
                    <img src={finance} alt="" />
                    </div>
                    <div className="letter">
                    <p>Finance and Insurance</p>
                    </div>
                </div>
            </div>
            <div className="waves"></div>
            <div className="Final_footer">
                <div className="final_foot">
                <div className="cont_1">
                    <img src={footer} alt="" />
                    <p>SixSigma.co.uk are the UK’s Six Sigma specialists, providing professional training for Six Sigma, Lean Six Sigma, Lean and Kaizen. We offer classroom, eLearning, onsite and virtual options as well as custom business consultancy and improvement programmes.</p>
                    <div className="social">
                        <img src={facebook} alt="" />
                        <img src={gmail} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
                <div className="cont_2">
                    <h2>Quick Links</h2>
                    <p><span><i class="fa fa-check"></i></span>Testimonial</p>
                    <p><span><i class="fa fa-check"></i></span>Clients</p>
                    <p><span><i class="fa fa-check"></i></span>Contact us</p>
                    <p><span><i class="fa fa-check"></i></span>Blogs</p>
                    <p><span><i class="fa fa-check"></i></span>Privacy policy</p>
                    <p><span><i class="fa fa-check"></i></span>Cookies</p>
                    <p><span><i class="fa fa-check"></i></span>Terms & conditions</p>
                </div>
                <div className="cont_3">
                    <h2>Courses</h2>
                    <p><span><i class="fa fa-check"></i></span>Six Sigma Green Belt</p>
                <p><span><i class="fa fa-check"></i></span>Lean Six Sigma Green Belt</p>
                <p><span><i class="fa fa-check"></i></span>5S Training</p>
                <p><span><i class="fa fa-check"></i></span>Certified Kaizen Foundation</p>
                <p><span><i class="fa fa-check"></i></span>Certified Kaizen Practitioner</p>
                <button>Find a course <span><i class='fas fa-angle-right'></i></span> </button>
                </div>
                <div className="cont_4">
              <h2>Blogs</h2>
              <div className="blog_1">
                <p>Which Game of Thrones Character is the Best Project Manager?</p>
                <h4 className="dates">2017-06-16</h4>
              </div>
              <div className="blog_2">
                <p>Six Sigma Black Belt Course Information</p>
                <h4 className="dates">2017-03-30</h4>
              </div>
                </div>
                </div>
            </div>
            <div className="end">
                <p>Pentagon Training Limited VAT Registration No: 652 8880 03, Company Registration No: 3011290</p>
            </div>
        </div>
        </>
    )
}

export default Client;