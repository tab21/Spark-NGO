import React from "react";

//My Components
import { FounderCard } from "../Card";

//Data
import { founderData } from "../../assets/data/founderData";

//Scss
import "./style.scss";

export default function About() {
	return (
		<div id="aboutUs">
			<h2>About Us</h2>
			<section>
				<hr data-content="Who we Are ?" />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Recusandae non incidunt illum culpa exercitationem, iure
					sint dolore totam. Beatae maxime voluptatem voluptates
					deserunt, sunt ut dignissimos quo odio repellat
					recusandae?Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Odio perspiciatis porro facilis
					consequuntur sed quidem illo voluptatem aut, nisi eveniet at
					odit minima dicta iure rerum magni! Minus, quis aspernatur?
				</p>
			</section>
			<section>
				<hr data-content="What we do?" />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Cupiditate vero deleniti fugit. Iste, fugit. Pariatur
					consequatur ipsum veritatis, quae tempore doloribus,
					exercitationem inventore, optio quos autem animi est
					expedita ipsa?Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Voluptate delectus consequuntur impedit,
					atque quibusdam architecto illo dolorum temporibus officiis
					nostrum tenetur debitis! Quibusdam vel consequatur eligendi
					dolorum in est fuga!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Cupiditate vero deleniti fugit. Iste, fugit. Pariatur
					consequatur ipsum veritatis, quae tempore doloribus,
					exercitationem inventore, optio quos autem animi est
					expedita ipsa?Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Voluptate delectus consequuntur impedit,
					atque quibusdam architecto illo dolorum temporibus officiis
					nostrum tenetur debitis! Quibusdam vel consequatur eligendi
					dolorum in est fuga!
				</p>
			</section>
			<section>
				<hr data-content="Our Founders" />
				<div className="flex">
					{founderData.map((data, key) => {
						return <FounderCard key={key} {...data} />;
					})}
				</div>
			</section>
			<section>
				<hr data-content="Our Vision" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nam, totam. Magni sint excepturi dolorem placeat quae
					voluptatum, corporis illo eum quidem, non autem tempore
					consequuntur praesentium nesciunt sapiente dolor
					laudantium?Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Sapiente voluptatibus ad necessitatibus
					assumenda officiis. Adipisci minus, iure hic voluptatum esse
					nostrum? Quam, unde ea. Possimus impedit facere ipsam vero
					totam.
				</p>
			</section>
		</div>
	);
}
