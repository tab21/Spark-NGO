import Carousel from "react-bootstrap/Carousel";

// images
import img1 from "../../assets/carouselHomeImgs/1.jpg";
import img2 from "../../assets/carouselHomeImgs/2.jpg";
import img3 from "../../assets/carouselHomeImgs/3.jpg";

function CarouselFadeExample() {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img className="d-block w-100" src={img1} alt="First slide" />
				<Carousel.Caption>
					<h5>First slide</h5>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img className="d-block w-100" src={img2} alt="Second slide" />
				<Carousel.Caption>
					<h5>Second slide</h5>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img className="d-block w-100" src={img3} alt="Third slide" />
				<Carousel.Caption>
					<h5>Third slide</h5>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselFadeExample;
