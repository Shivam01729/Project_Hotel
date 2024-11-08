import React from "react";
import ServicesCSS from './../Services/Services.module.css'

function Services(){
    return(
        <div className={`${ServicesCSS.Service_wrapper} section`}>
            <small className="section__Heading">Facilities</small>
                <h2 className="section__Title">Our Best <span>Services</span></h2>

            <div className={ServicesCSS.Services_cards}>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-hotel-line"></i>
                    <h3>Basic Facilities</h3>
                    <p>- Reception /Front Desk</p>
                    <p>- Room Services</p>
                    <p>- House Keeping</p>
                    <p>- Wifi & Parking</p>
                </div>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-hotel-bed-line"></i>
                    <h3>Room Aminities</h3>
                    <p>- Comfortable Bedding</p>
                    <p>- Bed Room and Hall</p>
                    <p>- TV and AC</p>
                    <p>- WashRoom</p>
                </div>

                <div className={ServicesCSS.Services_card}>
                    <i className="ri-music-line"></i>
                    <h3>Party/Function</h3>
                    <p>- Catering</p>
                    <p>- Decoration</p>
                    <p>- basic facilities</p>
                    <p>- Photography</p>
                </div>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-hotel-bed-line"></i>
                    <h3>Dormitory</h3>
                    <p>- Comfortable Bedding</p>
                    {/* <p>- Hall</p> */}
                    <p>- TV and AC</p>
                    <p>- WashRoom</p>
                </div>
            </div>

        </div>

    )
}
export default Services