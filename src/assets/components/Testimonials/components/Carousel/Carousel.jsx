import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialItem from "../TestimonialItem/TestimonialItem.jsx";
import CustomNextArrow from "./components/CustomNextArrow/CustomNextArrow.jsx";
import CustomPrevArrow from "./components/CustomPrevArrow/CustomPrevArrow.jsx";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const slide1Img = "/Carousel/tst1.jpg";
  return (
    <Slider {...settings}>
      <div>
        <TestimonialItem
          image={slide1Img}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          title={"John Doe"}
          role={"CEO"}
        />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
};

export default Carousel;
