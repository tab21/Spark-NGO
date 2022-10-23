import React from "react";

//my components
import CarouselHome from "./carousel";
import HomeSection from "./HomeSection";

//data
import { projectData } from "../../assets/data/projectData";
import { eventData } from "../../assets/data/eventData";

// scss
import "./style.scss";

export default function Home() {
	return (
		<div id="home">
			<section id="carousel">
				<CarouselHome className="carousel" />
			</section>
			<section id="project">
				<hr data-content="Our Projects" />
				<HomeSection {...projectData} />
			</section>
			<section id="events">
				<hr data-content="Our Events and Workshops" />
				<HomeSection {...eventData} />
			</section>
		</div>
	);
}
