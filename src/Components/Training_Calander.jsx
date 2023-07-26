import React from "react";
import virtual from '../images/virtual-white.svg';
import online from '../images/online.svg';
import onsite from '../images/inhouse.svg';
import Trainingdata from "./Trainingdata";
import Sdata from "./Card";

const TrainingCalendar = () => {

    return (
        <>
            <div className="Training_calendar">
                <div className="caland">
                    <div className="Head">
                        <h1>Six Sigma training calendar</h1>
                    </div>
                    <div className="Selector">
                        <div className="selectors">
                            <div className="courses">
                                <p>Select Your Course</p>
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
                                <p>Choose a Location</p>
                                <select name="Loca" id="Location">
                                    <option value="">Select a location:</option>
                                    <option value="2">Uttar Pradesh</option>
                                    <option value="3">Bihar</option>
                                    <option value="4">Madhya pradesh</option>
                                    <option value="5">Rajasthan</option>
                                    <option value="6">Maharashtra</option>
                                    <option value="7">Gujrat</option>
                                    <option value="8">Banglore</option>
                                    <option value="9">Kerla</option>
                                    <option value="10">Chattishgarh</option>
                                    <option value="12">Meghalaya</option>
                                    <option value="13">Jammu & Kashmir</option>
                                    <option value="14">Leh Laddakh</option>
                                    <option value="15">Goa</option>
                                    <option value="16">New Delhi</option>
                                    <option value="17">Hariyana</option>
                                    <option value="18">Punjab</option>
                                    <option value="19">Shimla</option>
                                    <option value="20">Arunanchal Pradesh</option>
                                    <option value="21">Assam</option>

                                </select>
                            </div>
                            <div className="Delivery_format">
                                <p>Choose Delivery Format</p>
                                <select name="Del" id="Delivery">
                                    <option value="">Select Delivery Format:</option>
                                    <option value="2">Virtual</option>
                                    <option value="3">Classroom</option>
                                    <option value="4">Online</option>
                                    <option value="5">Onsite</option>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36.49" height="41.523" viewBox="0 0 36.49 41.523">
                                            <g id="_002-work" data-name="002-work" transform="translate(0 0)">
                                                <g id="Group_90" data-name="Group 90" transform="translate(9.731 29.066)">
                                                    <g id="Group_89" data-name="Group 89">
                                                        <path id="Path_287" data-name="Path 287" d="M152.266,342.984a3.727,3.727,0,0,0,.669-2.139V339.46a3.066,3.066,0,1,0-6.082,0v1.384a3.727,3.727,0,0,0,.669,2.139,3.014,3.014,0,0,0-1.885,1.343,3.014,3.014,0,0,0-1.885-1.343,3.727,3.727,0,0,0,.669-2.139V339.46a3.066,3.066,0,1,0-6.082,0v1.384a3.727,3.727,0,0,0,.669,2.139,3.014,3.014,0,0,0-1.885,1.343,3.014,3.014,0,0,0-1.885-1.343,3.727,3.727,0,0,0,.669-2.139V339.46a3.066,3.066,0,1,0-6.082,0v1.384a3.727,3.727,0,0,0,.669,2.139,3.37,3.37,0,0,0-2.493,3.4v2.076h1.216v-2.076a1.963,1.963,0,0,1,1.824-2.076h3.649a1.963,1.963,0,0,1,1.824,2.076v2.076h1.216v-2.076a1.963,1.963,0,0,1,1.824-2.076H143.2a1.963,1.963,0,0,1,1.825,2.076v2.076h1.216v-2.076a1.963,1.963,0,0,1,1.824-2.076h3.649a1.963,1.963,0,0,1,1.825,2.076v2.076h1.216v-2.076A3.37,3.37,0,0,0,152.266,342.984Zm-17.576-2.139a1.84,1.84,0,1,1-3.649,0V339.46a1.84,1.84,0,1,1,3.649,0Zm8.514,0a1.84,1.84,0,1,1-3.649,0V339.46a1.84,1.84,0,1,1,3.649,0Zm8.514,0a1.84,1.84,0,1,1-3.649,0V339.46a1.84,1.84,0,1,1,3.649,0Z" transform="translate(-128 -336)" fill="#00a651" />
                                                    </g>
                                                </g>
                                                <g id="Group_92" data-name="Group 92" transform="translate(0 6.92)">
                                                    <g id="Group_91" data-name="Group 91">
                                                        <path id="Path_288" data-name="Path 288" d="M14.818,86.969a.543.543,0,0,0-.222-.048H12.163a.618.618,0,0,0-.572.455l-.645,2.017-.021-.066a3.273,3.273,0,0,0-3.02-2.407H7.89a3.739,3.739,0,0,0,.624-2.076V83.46A3.271,3.271,0,0,0,5.473,80a3.271,3.271,0,0,0-3.041,3.46v1.384a3.739,3.739,0,0,0,.624,2.076H3.041A3.275,3.275,0,0,0,0,90.381v8.3a.654.654,0,0,0,.608.692H2.433v6.713l-1.114,1.9a.753.753,0,0,0,.168.96.557.557,0,0,0,.338.116h7.3a.654.654,0,0,0,.608-.692.762.762,0,0,0-.1-.384l-1.114-1.9V93.312l.153.346A2.355,2.355,0,0,0,12,94.923a2.725,2.725,0,0,0,1.2-1.479l.988-2.809.973-2.768A.726.726,0,0,0,14.818,86.969ZM3.649,83.46a1.963,1.963,0,0,1,1.824-2.076A1.963,1.963,0,0,1,7.3,83.46v1.384A1.963,1.963,0,0,1,5.473,86.92a1.963,1.963,0,0,1-1.824-2.076ZM2.433,97.993H1.216V96.609H2.433Zm3.649,9.689v-8.3H4.865v8.3h-1.9l.586-1a.767.767,0,0,0,.1-.384v-8.3H7.3v8.3a.767.767,0,0,0,.1.384l.586,1Zm5.989-14.749a1.225,1.225,0,0,1-1.652.8,1.35,1.35,0,0,1-.663-.695l-1.3-2.971a.577.577,0,0,0-.812-.321.707.707,0,0,0-.343.631v6.228H3.649V90.381a.654.654,0,0,0-.608-.692.654.654,0,0,0-.608.692v4.844H1.216V90.381A1.963,1.963,0,0,1,3.041,88.3H4.865v6.92H6.082V88.3H7.906a2.033,2.033,0,0,1,1.876,1.5l.593,1.855a.591.591,0,0,0,.779.414.656.656,0,0,0,.364-.414l.186-.583h1.02Zm1.14-3.244H12.147l.442-1.384H13.7Z" transform="translate(0 -80)" fill="#00a651" />
                                                    </g>
                                                </g>
                                                <g id="Group_94" data-name="Group 94" transform="translate(9.731)">
                                                    <g id="Group_93" data-name="Group 93">
                                                        <path id="Path_289" data-name="Path 289" d="M154.151,4.152a.654.654,0,0,0,.608-.692V.692A.654.654,0,0,0,154.151,0H128.608A.654.654,0,0,0,128,.692V3.46a.654.654,0,0,0,.608.692h.608v8.3h1.216v-8.3h21.894V19.377H132.865v1.384h7.906V23.82l-3.953,2.569.6,1.2,3.35-2.176v2.268h1.216V25.414l3.345,2.176.6-1.2-3.948-2.569V20.761h12.771V19.377h-1.216V4.152ZM129.216,2.768V1.384h24.327V2.768Z" transform="translate(-128)" fill="#00a651" />
                                                    </g>
                                                </g>
                                                <g id="Group_96" data-name="Group 96" transform="translate(16.067 6.941)">
                                                    <g id="Group_95" data-name="Group 95">
                                                        <path id="Path_290" data-name="Path 290" d="M225.233,80.932,222.8,80.24l-.3,1.343,1.139.324-4.616,3.677-2.685-2.444a.551.551,0,0,0-.733-.022l-4.257,3.46.707,1.125,3.883-3.156,2.681,2.442a.55.55,0,0,0,.73.026l5.124-4.082v1.439h1.216V81.6A.682.682,0,0,0,225.233,80.932Z" transform="translate(-211.352 -80.24)" fill="#00a651" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
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
                        <div className="right">
                        {Sdata.map((val) => (
                            <Trainingdata
                                head={val.head}
                                virtuh1={val.virtuh1}
                                virtup={val.virtup}
                                virtu_2img={val.virtu_2img}
                                virtu_2p={val.virtu_2p}
                                date={val.date}
                                day={val.day}
                                month={val.month}
                                year={val.year}
                                pricep={val.pricep}
                                priceh2={val.priceh2}
                                enquirebutton={val.enquirebutton}
                                durationh3={val.durationh3}
                                durationp={val.durationp}
                                view_more={val.view_more}
                                rightangle={val.rightangle}
                                contactenvelop={val.contactenvelop}
                                contactphone={val.contactphone}
                                book_nowbutton={val.book_nowbutton}
                            />
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>


    );

};

export default TrainingCalendar;