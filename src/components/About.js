import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const About = ({history}) => {

    useEffect(() => {
        history.push("/maintain")
    },[])

  return (
    <div className="container">
      <h3 className="center-align">About</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore
        accusamus voluptate, molestiae dolor cum minima dolore. Vero molestiae,
        nesciunt sequi ullam ut possimus temporibus optio magnam? Quis totam
        sapiente dicta nemo similique! Ea veritatis saepe sapiente distinctio
        optio magnam facere doloribus recusandae <br/><br/>illum nam provident repellat
        reprehenderit, odit magni voluptate commodi delectus maiores at. Dolorum
        quisquam, nihil suscipit beatae doloribus, ipsum laudantium ullam nobis
        aliquid similique magnam facilis et? Sequi reiciendis voluptatibus optio
        culpa minima eveniet nulla reprehenderit incidunt eum libero aut impedit
        quos vitae id voluptatum totam iure voluptates animi fugit quam alias,
        necessitatibus nemo ipsa maiores! Aut.
      </p>
    </div>
  );
};

export default About;
