import React from "react";

//my components
import { HomeCard } from "../Card";

export default function HomeSection(Data) {
	//number of projects in homepage
	let homeCardData = [];
	for (let i = 0; i < 2; i += 1) {
		homeCardData.push(Data[i]);
	}

	return (
		<div className="flex">
			{homeCardData.map((data, key) => {
				return <HomeCard key={key} {...data} />;
			})}
		</div>
	);
}
