import React from 'react'
import './Style.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Slider from './Component/Slider'
import Testimonials from './Component/Testimonials'
import Goodread from './Component/Goodread'
import Homepage from './Homepage'
import Section from './Component/Section'
import Footer from './Component/Footer'


const App = () => {
  return (
    <div>
      <>
      <Navbar/>

      <Hero/>

      <Homepage/>

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
