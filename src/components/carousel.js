import React from 'react';
import { Carousel } from '../../node_modules/react-responsive-carousel';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.css';

class Slider extends React.Component {
  render () {
    return (
      <div className="slider">
        <Carousel width="300px" showStatus={false} showIndicators={false}>
          <div>
              <img src="../images/angular.png" className="slider-pic" alt="angular logo"/>
          </div>
          <div>
              <img src="../images/react.png" className="slider-pic" alt="react logo"/>
          </div>
          <div>
              <img src="../images/es6.png" className="slider-pic" alt="es6 logo"/>
          </div>
          <div>
              <img src="../images/node.png" className="slider-pic" alt="node logo"/>
          </div>
          <div>
              <img src="../images/js.png" className="slider-pic" alt="js logo"/>
          </div>
          <div>
              <img src="../images/sketch.png" className="slider-pic" alt="sketch logo"/>
          </div>
          <div>
              <img src="../images/bootstrap.png" className="slider-pic" alt="bootstrap logo"/>``
          </div>
          <div>
              <img src="../images/materialize.png" className="slider-pic" alt="materialize logo"/>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Slider;