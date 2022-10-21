import React from "react";

//Data
import { Data } from "../../assets/data/projectData";
import HomeCard from "../Card";
import Accordion from "react-bootstrap/Accordion";

//css
import "./style.scss";

export default function Project() {
	return (
		<div id="projectDatas">
			<h2>Project</h2>
			<Accordion defaultActiveKey={0}>
				{Data.map((data, key) => {
					return <HomeCard key={key} {...data} KEY={key} />;
				})}
			</Accordion>
		</div>
	);
}
