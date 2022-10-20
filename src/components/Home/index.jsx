import React from "react";
import ProjectCard from "../Card";
import CarouselHome from "./carousel";

// css
import "./style.scss";

export default function Home() {
	return (
		<div className="home">
			<section>
				<CarouselHome className="carousel" />
			</section>
			<section>
				<h2>Our Projects</h2>
				<div className="flex">
					<ProjectCard />
				</div>
			</section>
		</div>
	);
}
