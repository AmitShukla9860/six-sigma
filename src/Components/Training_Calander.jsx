import React from "react";
import virtual from '../images/virtual-white.svg';
import classroom from '../images/classroom.svg';
import online from '../images/online.svg';
import onsite from '../images/inhouse.svg';
import Virtual from '../images/virtual.svg';
const Training_calendar = () => {

    return (
        <>
            <div className="Training_calendar">
                <div className="caland">
                    <div className="Head">
                        <h1>Six Sigma training calendar</h1>
                    </div>
                    <div className="Selector">
                        <div className="select">
                            <p>Select Your Course</p>
                            <p>Choose a Location</p>
                            <p>Choose Delivery Format</p>
                        </div>
                        <div className="selectors">
                            <div className="courses">
                                <select name="Courses" id="Course">
                                    <option value="">Select your course:</option>
                                    <option value="2">Lean Six Sigma Green Belt</option>
                                    <option value="6">Lean Six Sigma Yellow Belt</option>
                                    <option value="7">Lean Six Sigma Black Belt</option>
                                    <option value="8">Lean Six Sigma Black Belt Upgrade</option>
                                    <option value="9">Lean Six Sigma Master Black Belt (MBB)</option>
                                    <option value="34">Lean Six Sigma White Belt</option>
                                    <option value="40">DMAIC Training</option>
                                    <option value="1">Six Sigma Green Belt</option>
                                    <option value="29">Six Sigma Black Belt</option>
                                    <option value="28">Six Sigma Yellow Belt</option>
                                    <option value="30">Six Sigma Black Belt Upgrade</option>
                                    <option value="31">Six Sigma Master Black Belt (MBB)</option>
                                </select>
                            </div>

                            <div className="Locations">
                                <select name="Loca" id="Location">
                                    <option value="">Select your course:</option>
                                    <option value="2">Lean Six Sigma Green Belt</option>
                                    <option value="6">Lean Six Sigma Yellow Belt</option>
                                    <option value="7">Lean Six Sigma Black Belt</option>
                                    <option value="8">Lean Six Sigma Black Belt Upgrade</option>
                                    <option value="9">Lean Six Sigma Master Black Belt (MBB)</option>
                                    <option value="34">Lean Six Sigma White Belt</option>
                                    <option value="40">DMAIC Training</option>
                                    <option value="1">Six Sigma Green Belt</option>
                                    <option value="29">Six Sigma Black Belt</option>
                                    <option value="28">Six Sigma Yellow Belt</option>
                                    <option value="30">Six Sigma Black Belt Upgrade</option>
                                    <option value="31">Six Sigma Master Black Belt (MBB)</option>
                                </select>
                            </div>

                            <div className="Delivery_format">
                                <select name="Del" id="Delivery">
                                    <option value="">Select your course:</option>
                                    <option value="2">Lean Six Sigma Green Belt</option>
                                    <option value="6">Lean Six Sigma Yellow Belt</option>
                                    <option value="7">Lean Six Sigma Black Belt</option>
                                    <option value="8">Lean Six Sigma Black Belt Upgrade</option>
                                    <option value="9">Lean Six Sigma Master Black Belt (MBB)</option>
                                    <option value="34">Lean Six Sigma White Belt</option>
                                    <option value="40">DMAIC Training</option>
                                    <option value="1">Six Sigma Green Belt</option>
                                    <option value="29">Six Sigma Black Belt</option>
                                    <option value="28">Six Sigma Yellow Belt</option>
                                    <option value="30">Six Sigma Black Belt Upgrade</option>
                                    <option value="31">Six Sigma Master Black Belt (MBB)</option>
                                </select>
                            </div>
                            <div className="go">
                                <button>GO</button>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <div className="left_module">
                            <div className="training_mode">
                                <h3>Select modes of training</h3>
                                <div className="left_1">
                                    <div className="virtual">
                                        <img src={virtual} alt="" />
                                        <h3>Virtual</h3>
                                    </div>
                                    <div className="virtual_1">
                                        <img src={classroom} alt="" />
                                        <h3>Classroom</h3>
                                    </div>
                                </div>
                                <div className="left_2">
                                    <div className="virtual_1">
                                        <img src={online} alt="" />
                                        <h3>Online</h3>
                                    </div>
                                    <div className="virtual_1">
                                        <img src={onsite} alt="" />
                                        <h3>Onsite</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="Guarantee">
                                <h2>Our Price Guarantee!</h2>
                                 <p>Looking for the Best Price to fulfil a training needs for your company and employees?</p>
                                 <button>GET MORE INFO</button>
                            </div>
                        </div>
                        <div className="right_">
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Green Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates 
                                            <i class='fas fa-angle-right'></i></p>
                                    </div>
                                <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Yellow Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1295</p>
                                        <h2>£895</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 2 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Black Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£2995</p>
                                        <h2>£2495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Green Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Green Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Green Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Green Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Green Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Green Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Green Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Green Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Green Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Lean Six Sigma Green Belt</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1495</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 5 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                <div className="right_module">
                            <div className="header">
                                <h2>Certified Kaizen Practitioner</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1295</p>
                                        <h2>£895</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 1 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_module">
                            <div className="header">
                                <h2>Certified Kaizen Foundation & Practitioner</h2>
                                <div className="Lean_content">
                                    <div className="virtu">
                                        <h2>Virtual</h2>
                                        <p>Best selling Six Sigma Virtual Courses</p>
                                    </div>
                                    <div className="virtu_2">
                                        <img src={Virtual} alt="" />
                                        <p>Virtual</p>
                                    </div>
                                    <div className="date">
                                        <div className="date_1">
                                            <p className="dat">15</p>
                                            <span></span>
                                            <p className="day">Mon</p>
                                        </div>

                                        <div className="date_2">
                                            <p className="month">May</p>
                                            <span></span>
                                            <p className="year">2023</p>
                                        </div>
                                    </div>
                                    <div className="pric">
                                        <p>£1995</p>
                                        <h2>£1295</h2>
                                    </div>
                                    <div className="enquire">
                                        <button>Enquire</button>
                                    </div>
                                </div>
                                <div className="border">
                                    <span></span>
                                </div>
                                <div className="footer">
                                    <div className="duration">
                                        <h3>Duration:</h3>
                                        <p> 2 Days</p>
                                    </div>
                                    <div className="view_more">
                                        <p>View More Dates <i class='fas fa-angle-right'></i></p>
                                    </div>
                                    <div className="contact">
                                    <i class='fas fa-envelope'></i>
                                    <i class='fas fa-phone-alt'></i>
                                    </div>
                                    <div className="book_now">
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );

};

export default Training_calendar;