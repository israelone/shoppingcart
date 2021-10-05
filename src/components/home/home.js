

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner from '../../assets/images/sliderImage/banner.jpg'
const Home=()=>{
            return (
            <Carousel showThumbs={false} infiniteLoop= {true}>
                <div>
                    <img src={Banner} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Banner} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Banner} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    };
export default Home;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
