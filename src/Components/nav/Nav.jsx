// // Nav.jsx
// import React, { useRef } from "react";
// import navCSS from './../nav/Nav.module.css';

// function Nav() {
//     const menu = useRef();
//     const navbar = useRef();

//     const menuHandler = () => {
//         menu.current.classList.toggle(navCSS.showNav);
//     };

//     window.addEventListener('scroll', function () {
//         if (this.window.scrollY > 100) {
//             navbar.current.classList.add(navCSS.navbarScroll);
//         } else {
//             navbar.current.classList.remove(navCSS.navbarScroll);
//         }
//     });

//     return (
//         <div className={navCSS.nav_wrapper} ref={navbar}>
//             <div className={navCSS.logo}>
//                 <a href="#"><span>Hotel</span>YASH</a>
//             </div>
//             <ul ref={menu}>
//                 <li><a href="#home">HOME</a></li>
//                 <li><a href="#about">About Us</a></li>
//                 <li><a href="#categories">Categories</a></li>
//                 <li><a href="#rooms">Rooms</a></li>
//                 {/* <li><a href="#rooms" onClick={closeMenuOnLinkClick}>Rooms</a></li> */}
//                 <li><a href="#testimonials">Testimonials</a></li>
//                 <li><a href="#blogs">Blogs</a></li>
//             </ul>

//             <div className={navCSS.Nav_btns}>
//                 <button className={navCSS.btn}>Book Now</button>
//                 <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
//             </div>
//         </div>
//     );
// }

// export default Nav;

import React, { useRef } from "react";
import navCSS from './../nav/Nav.module.css';

function Nav() {
    const menu = useRef();
    const navbar = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle(navCSS.showNav);
    };

    const closeMenuOnLinkClick = () => {
        if (menu.current.classList.contains(navCSS.showNav)) {
            menu.current.classList.remove(navCSS.showNav);
        }
    };

    window.addEventListener('scroll', function () {
        if (this.window.scrollY > 100) {
            navbar.current.classList.add(navCSS.navbarScroll);
        } else {
            navbar.current.classList.remove(navCSS.navbarScroll);
        }
    });

    return (
        <div className={navCSS.nav_wrapper} ref={navbar}>
            <div className={navCSS.logo}>
                <a href="#"><span>Hotel</span>YASH</a>
            </div>
            <ul ref={menu}>
                <li><a href="#home" onClick={closeMenuOnLinkClick}>HOME</a></li>
                <li><a href="#about" onClick={closeMenuOnLinkClick}>About Us</a></li>
                <li><a href="#categories" onClick={closeMenuOnLinkClick}>Facilities</a></li>
                <li><a href="#rooms" onClick={closeMenuOnLinkClick}>Rooms</a></li>
                <li><a href="#testimonials" onClick={closeMenuOnLinkClick}>Testimonials</a></li>
                {/* <li><a href="#blogs" onClick={closeMenuOnLinkClick}>Blogs</a></li> */}
            </ul>

            <div className={navCSS.Nav_btns}>
                <button className={navCSS.btn}>Book Now</button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </div>
    );
}

export default Nav;
