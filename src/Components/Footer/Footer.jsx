import React from "react";
import footerCSS from './../Footer/Footer.module.css'

function Footer() {
    return (
        <footer className={`${footerCSS.footer_wrapper} sectionss`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                    <h2>HotelYash</h2>
                    <p>Escape the ordinary and indulge in a world of elegance and comfort, where every detail is crafted to make your stay unforgettable. Discover a sanctuary for relaxation, adventure, and memories that last a lifetime, offering a perfect retreat to unwind, reconnect, and experience life from a refreshing new perspective</p>
                </div>
            </div>

            <div className={footerCSS.FooterLinks}>
                <h3>Contact</h3>
                <p>Address: Dehri-on-sone</p>
                {/* <p>Email: shiavm@gmail.com </p> */}
                {/* <p>phone: <span>91-7903570716</span></p> */}
                <p>phone: +91-7903570716</p>
            </div>
            <div className={footerCSS.FooterLinks}></div>
        </footer>
    )
}
export default Footer

