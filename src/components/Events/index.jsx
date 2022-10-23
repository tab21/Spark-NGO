import React from "react";

//My components
import { EventCard } from "../Card";

//scss
import "./style.scss";

//data
import { eventData } from "../../assets/data/eventData";

export default function Events() {
	return (
		<div id="events">
			<h2>Events and WorkShops</h2>
			<div className="flex">
				{eventData.map((data, key) => {
					return <EventCard key={key} {...data} />;
				})}
			</div>
		</div>
	);
}
