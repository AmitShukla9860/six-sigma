import React from "react";

// import Virtual from '../images/virtual.svg';


const Trainingdata = ({ head,virtuh1,virtup,virtu_2img,virtu_2p,date,day,month,year,pricep,priceh2,enquirebutton,durationp,durationh3,view_more,contactenvelop,contactphone,book_nowbutton }) => {
    return (
        <>
                <div className="right_module">
                    <div className="header">
                        <h2>{head}</h2>
                        <div className="Lean_content">
                            <div className="virtu">
                                <h2>{virtuh1}</h2>
                                <p>{virtup}</p>
                            </div>
                            <div className="virtu_2">
                                <img src={virtu_2img} alt="" />
                                <p>{virtu_2p}</p>
                            </div>
                            <div className="date">
                                <div className="date_1">
                                    <p className="dat">{date}</p>
                                    <span></span>
                                    <p className="day">{day}</p>
                                </div>

                                <div className="date_2">
                                    <p className="month">{month}</p>
                                    <span></span>
                                    <p className="year">{year}</p>
                                </div>
                            </div>
                            <div className="pric">
                                <p>{pricep}</p>
                                <h2>{priceh2}</h2>
                            </div>
                            <div className="enquire">
                                <button>{enquirebutton}</button>
                            </div>
                        </div>
                        <div className="border">
                            <span></span>
                        </div>
                        <div className="footer">
                            <div className="duration">
                                <h3>{durationh3}</h3>
                                <p> {durationp}</p>
                            </div>
                            <div className="view_more">
                                <p>{view_more} <i class='fas fa-angle-right'></i></p>
                            </div>
                            <div className="contact">
                                <i class='fas fa-envelope'></i>
                                <i class='fas fa-phone-alt'></i>
                            </div>
                            <div className="book_now">
                                <button>{book_nowbutton}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            );
};

            export default Trainingdata;



