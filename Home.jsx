import React from 'react'
import Slider from "react-slick";

const Home = () => {
    const settings = {
        className:"carousel",
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            {/* <div className="slideshow-container"> */}
            <Slider {...settings}>
                <div className="sliderContainer">
                    {/* <div className="numbertext">1 / 3</div> */}
                    <img className="" src="https://sneakernews.com/wp-content/uploads/2020/04/Air-Jordan-1-Low-Orange-Blue-553558_401-2.jpg?w=1140" />
                    <div className="text">Jordan 1 Low Orange</div>
                </div>
                <div className="sliderContainer">
                    {/* <div className="numbertext">2 / 3</div> */}
                    <img className="" src="https://sneakernews.com/wp-content/uploads/2019/10/Air-Jordan-1-High-Fearless-Les-Twins-CK5666_100-1.jpg" />
                    <div className="text">Jordan 1 High Fearless</div>
                </div>

                <div className="sliderContainer">
                    {/* <div className="numbertext">3 / 3</div> */}
                    <img className="" src="https://i.pinimg.com/originals/0f/00/51/0f0051f5c3235a488f167896b6402278.jpg" />
                    <div className="text">Jordan 1 Mid New Love</div>
                </div>

                {/* <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a className="next" onclick="plusSlides(1)">&#10095;</a> */}
            </Slider>
            {/* </div> */}


            {/* <div>
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
            </div> */}

            <h2>Our Beliefs</h2>
            <div className="boxed">
                <p>Prince Kickx believe that you should always have access to the freshest kicks. If you are a shoe collector or you just want a new pair, we have one of the best Jordan 1 stocks to fit all of our customers needs. We love hearing feedback and requests from our customers such as wanting a new shoe added to our website. We will always go above and beyond to fulfill the needs of our customers.  </p>
            </div>
        </>
    )
}

export default Home