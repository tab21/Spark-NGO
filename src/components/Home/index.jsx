import React from "react";

//my components
import CarouselHome from "./carousel";
import HomeSection from "./HomeSection";

//data
import { Data } from "../../assets/data/projectData";

// css
import "./style.scss";

export default function Home() {
	return (
		<div className="home">
			<section id="carousel">
				<CarouselHome className="carousel" />
			</section>
			<section id="project">
				<h2>Our Projects</h2>
				<HomeSection {...Data} />
			</section>
			<section id="events">
				<h2>Our Events and Workshops</h2>
				<HomeSection {...Data} />
			</section>
		</div>
	);
}
