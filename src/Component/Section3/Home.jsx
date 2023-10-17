import React from 'react'
import "./Home.css"
import Light1 from './assets/light1.png'
import Light2 from './assets/light2.png'
import Light3 from './assets/light3.png'
import smartwifi from './assets/smart-wifi.png'
import coloricon from './assets/color-icon.png'

const Homepage = () => {
  return (
    <>
    <div className="sternet-light-section">
 		<div className="row sternet-section direction_fl classone">
 		<div className="col-md-7 col-sm-12">
           <div className="sternet-card">
           	<div className="sternet-text">
           	<h3>Sternet Smart Wi-Fi RGB Led Strip Light</h3>
           	<p>Sternet Smart LED light strips are packed with rich colors and fantastic light effects.</p>
           	<button>Learn More</button>
           	</div>
           </div>
 		</div>
 		<div className="col-md-5 col-sm-12">
      <div className="light-card">
       	<div className="light-assets">
       	<div className="light-box">
       	<img src={Light1}/>
       </div>
       	<div className="color-light">
       	 <img src={coloricon}/>
 		</div>
 	</div>
 	</div>
 </div>
 </div>
 	<div className="row sternet-section classtwo">
 		<div className="col-md-5 col-sm-12">
         <div className="light-card">
       	<div className="light-assets">
       		<div className="light-box">
       	<img src= {Light2}/>
       </div>
       <div className="wifi-light">
       	<img src={smartwifi}/>
       </div>
 		</div>
 	   </div>
 		</div>
 		<div className="col-md-7 col-sm-12">
        <div className="sternet-card">
        	<div className="sternet-text">
           	<h3>Sternet Smart Wi-Fi 20W CCT Batten</h3>
           	<p>Sternet Smart Wi-Fi LED Batten with tunable temperature range from warm to cool white.</p>
           	<button>Learn More</button>
           </div>
           </div>
 		</div>
 	</div>
 	<div className="row sternet-section direction_fl classthree">
 		<div className="col-md-7 col-sm-12">
           <div className="sternet-card">
           	<div className="sternet-text">
           	<h3>Sternet Smart Wi-Fi CCT Led Downlight</h3>
           	<p>Sternet Smart Wi-Fi Led Downlight are packed with rich colors and fantastic light effects.</p>
           	<button>Learn More</button>
           </div>
           </div>
 		</div>
 		<div className="col-md-5 col-sm-12">
       <div className="light-card">
       	<div className="light-assets">
       		<div className="light-box">
       	<img src={Light3}/>
       </div>
       <div className="led-light">
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
