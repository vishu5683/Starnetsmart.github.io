import React from 'react'
import "./Homepage.css"
import Light1 from './images/light1.png'
import Light2 from './images/light2.png'
import Light3 from './images/light3.png'
import smartwifi from './images/smart-wifi.png'
import coloricon from './images/color-icon.png'

const Homepage = () => {
  return (
    <>
    <div class="sternet-light-section">
 		<div class="row sternet-section direction_fl">
 		<div class="col-md-7 col-sm-12">
           <div class="sternet-card">
           	<div class="sternet-text">
           	<h3>Sternet Smart Wi-Fi RGB Led Strip Light</h3>
           	<p>Sternet Smart LED light strips are packed with rich colors and fantastic light effects.</p>
           	<button>Learn More</button>
           	</div>
           </div>
 		</div>
 		<div class="col-md-5 col-sm-12">
      <div class="light-card">
       	<div class="light-images">
       	<div class="light-box">
       	<img src={Light1}/>
       </div>
       	<div class="color-light">
       	 <img src={coloricon}/>
 		</div>
 	</div>
 	</div>
 </div>
 </div>
 	<div class="row sternet-section">
 		<div class="col-md-5 col-sm-12">
         <div class="light-card">
       	<div class="light-images">
       		<div class="light-box">
       	<img src= {Light2}/>
       </div>
       <div class="wifi-light">
       	<img src={smartwifi}/>
       </div>
 		</div>
 	   </div>
 		</div>
 		<div class="col-md-7 col-sm-12">
        <div class="sternet-card">
        	<div class="sternet-text">
           	<h3>Sternet Smart Wi-Fi 20W CCT Batten</h3>
           	<p>Sternet Smart Wi-Fi LED Batten with tunable temperature range from warm to cool white.</p>
           	<button>Learn More</button>
           </div>
           </div>
 		</div>
 	</div>
 	<div class="row sternet-section">
 		<div class="col-md-7 col-sm-12">
           <div class="sternet-card">
           	<div class="sternet-text">
           	<h3>Sternet Smart Wi-Fi CCT Led Downlight</h3>
           	<p>Sternet Smart Wi-Fi Led Downlight are packed with rich colors and fantastic light effects.</p>
           	<button>Learn More</button>
           </div>
           </div>
 		</div>
 		<div class="col-md-5 col-sm-12">
       <div class="light-card">
       	<div class="light-images">
       		<div class="light-box">
       	<img src={Light3}/>
       </div>
       <div class="led-light">
       	<img src={smartwifi}/>
       </div>
       	</div>
 		</div>
 		</div>
 	</div>
 	</div>
    </>
  )
}

export default Homepage
