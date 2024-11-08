// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Nav from './Components/nav/Nav'
// import Header from './Components/Header/Header'
// import About from './Components/About/About'
// import Services from './Components/Services/Services'
// import Rooms from './Components/Rooms/Room'
// import Testimonial from './Components/Testimonials/Testimonial'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Footer from './Components/Footer/Footer'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     
//      <Nav />
//      <Header />
//      <About />
//      <Services />
//      <Rooms />
//     {/* <Testimonial /> */}
   
//     <Router>
//             <Nav />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/testimonials" element={<Testimonial />} />
//                 {/* Add other routes here */}
//             </Routes>
//         </Router>
//         <Footer />
//     </>
//   )
// }


// export default App
import './App.css';
import Nav from './Components/nav/Nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Rooms from './Components/Rooms/Room';
import Testimonial from './Components/Testimonials/Testimonial';
import Footer from './Components/Footer/Footer';
// import Booking from './Components/Booking/Booking';

function App() {
    return (
        <>

            <Nav />
         
          

            <div id="home">
                <Header />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="categories">
                <Services />
            </div>
            <div id="rooms">
                <Rooms />
            </div>
            <div id="testimonials">
                <Testimonial />
            </div>
            <Footer />
        </>
    );
}

export default App;
