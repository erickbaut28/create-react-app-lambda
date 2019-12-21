import React, { useEffect, useState } from "react";
import "../css/fontawesome-free-5.11.2-web/css/all.css"
import const1 from "../images/const1.jpg"
import const2 from "../images/const2.jpg"
import const3 from "../images/const3.jpg"
import const4 from "../images/const4.jpg"
import constC from "../images/constcover2.jpg"
import electric from "../images/electric.jpg"
import roofing from "../images/roofing.jpg"
import shower from "../images/shower.jpg"
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery"
import carlos from "../images/carlos.jpg"

const images = [
  const4,
  const1,
  const2,
  const3,
  

];





const Home = () => {
  const cardStyles = {
    width: "24rem",
    // height: "50vh",
    // width: "50%"
  }
  const secStyle = {
    width: "200px",
    padding: "20px 60px,",
    letterspacing: "5px,",
    fontweight: "600",
    display: "inline-block",

  }
  const mainStyle = {
    background: "white",
  }
  const jumboStyles = {
    backgroundImage: `url(${constC})`,
    backgroundSize: "cover",
    backgroundrepeat: "no-repeat",
    // backgroundposition: "center",
    height: "50vh",
    width: "100%",
    opacity: ".8",
    fontSize: 14,
    color: "black",
    // textAlign: "center",
    paddingTop: "100px",
  }
  const headerStyle = {
    opacity: ".8",
    textAlign: "center",
  }
  const footerStyle = {
    color: "grey"
  }
// *****************************************carusel******************************************************
const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 4) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

// ********************************************end***************************************************

  return (
    <div className="container-fluid" style={mainStyle}>
      <div class="jumbotron" style={jumboStyles}>
  <h1 class="display-4">Castros Remodeling Services</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"></hr>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr></hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
<div className="container-fluid">
   {/* ************************************carusel*********************************** */}
   <Gallery
      style={{
        background: "white",
        height: "100vh",
        width: "100vw",
        
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
{/* ************************************end c*********************************** */}
</div>
<div class="container-fluid">
  <div class="row">
    <div class="col ">
    <div class="card " >
      <img src={shower} class="card-img-top" alt="..." style={cardStyles}></img>
      <div class="card-body">
        <h5 class="card-title">Tile Work</h5>
        <p class="card-text">showers,baths,backsplahs, floors and more</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
    <div class="col">
    <div class="card " >
      <img src={electric} class="card-img-top" alt="..." style={cardStyles}></img>
      <div class="card-body">
        <h5 class="card-title">Electirc work</h5>
        <p class="card-text">Residential Remodeling, pluugs,AC Units and more</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
    <div class="col">
    <div class="card " >
      <img src={roofing} class="card-img-top" alt="..." style={cardStyles}></img>
      <div class="card-body">
        <h5 class="card-title">Roofing</h5>
        <p class="card-text">Residential Remodeling and new installments </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
  </div>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
</div>
<footer  style={footerStyle}>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
  <div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
</footer> 
    </div>
  );
};
//*********************************carusel****************8************8 */
const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
//********************************end c******************************* */
export default Home;
