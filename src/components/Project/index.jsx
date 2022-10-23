import React from "react";
import Accordion from "react-bootstrap/Accordion";

// My components
import { ProjectCard } from "../Card";

//Data
import { projectData } from "../../assets/data/projectData";

//scss
import "./style.scss";

export default function Project() {
	return (
		<div id="projectDatas">
			<h2>Project</h2>
			<Accordion defaultActiveKey={0}>
				{projectData.map((data, key) => {
					return <ProjectCard key={key} {...data} KEY={key} />;
				})}
			</Accordion>
		</div>
	);
}
