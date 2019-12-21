import React from 'react'
import logo3 from "../images/logo4.jpg"


const Maintain = () => {
    const jumboStyles = {
        textAlign: "center",
    }
    const textStyle ={
        padding: "20px 400px",
        
    }
    return (
        <div className="containier">
            <div class="jumbotron jumbotron-fluid"style={jumboStyles}>
  <div class="container">
    <img src={logo3} alt=""/>
    <h1 class="display-4">NG Pro Meetings</h1>
    <p class="lead">By Javier</p>
  </div>
</div>
<div class="alert alert-success" role="alert" style={textStyle}>
  <h4 class="alert-heading">Horarios:</h4>
    <h5>Date: Saturday 30 Dec 2019</h5>
    <h5>Location : 4563 lime rd Garland TX 75324</h5>
    <h5>Time: 7:30 pm</h5>
    <hr></hr>
    <h5>Date: Friday 4 January 2020</h5>
    <h5>Location : 143 mary ln Dallas TX 75315</h5>
    <h5>Time: 7:30 pm</h5>
    <hr></hr>
    <h5>Saturday 20 January 2020</h5>
    <h5>Location : 7634 lime rd Dallas TX 75326</h5>
    <h5>Time: 7:30 pm</h5>
    <hr></hr>

  <hr></hr>
  <p class="mb-0">javier Bautista 214-345-3454 erickbaut28@gmai.com</p>
</div>
        </div>
    )
}

export default Maintain