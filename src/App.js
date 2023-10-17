
import React from 'react'
import './Style.css'
import Navbar from './Component/Header'
import Hero from './Component/Section2/Hero'
import Slider from './Component/Section4/Slider'
import Testimonials from './Component/Section5-reviews/Testimonials'
import Goodread from './Component/Section6/Goodread'

import Section from './Component/Section7-email/Section'
import Footer from './Component/Section8-Footer/Footer'
import Home from './Component/Section3/Home'

const App = () => {
  return (
    <div>
      <>
      <Navbar/>

      <Hero/>

      <Home/>
      

      <Slider/>

     

            <div className="testimonial_wrap text-center">
                <h5>Customer Testimonial</h5>
              <div className='testimonial_box'></div>
                <div className="row">
                    <div class="col-md-4 col-12 margbt">
                        <Testimonials/>
                    </div>
                    <div class="col-md-4 col-12 margbt">
                        <Testimonials />
                    </div>
                    <div class="col-md-4 col-12 margbt">
                        <Testimonials />
                    </div>
                </div>
            </div>

            <Goodread/>

            <Section/>

            <Footer/>
      </>
    </div>
  )
}

export default App
