import { Badge, Card, Accordion } from "react-bootstrap";

export function FounderCard(props) {
	return (
		<Card className="card">
			<Card.Img variant="top" src={props.img} />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>{props.position}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export function EventCard(props) {
	let cardStatus = status(props.date);
	return (
		<Card className="card ">
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Subtitle>
					Date : {props.date.toJSON().slice(0, 10)}
				</Card.Subtitle>
				<Card.Text>{props.intro}</Card.Text>
				<Card.Text>
					<Badge bg={cardStatus[0]}>Status : {cardStatus[1]}</Badge>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export function ProjectCard(props) {
	console.log(props);
	return (
		<Accordion.Item eventKey={props.KEY} className="projectData">
			<Accordion.Header className="projectHeader">
				{props.name}
			</Accordion.Header>
			<Accordion.Body className="projectBody">
				<img src={props.img} alt={props.name} />
				<div>{props.body}</div>
			</Accordion.Body>
		</Accordion.Item>
	);
}

export function HomeCard(props) {
	let cardTextStatus, cardDate;
	if (props.date) {
		let cardStatus = status(props.date);

		cardTextStatus = (
			<Card.Text>
				<Badge bg={cardStatus[0]}>Status : {cardStatus[1]}</Badge>
			</Card.Text>
		);
		cardDate = (
			<Card.Subtitle>
				Date : {props.date.toJSON().slice(0, 10)}
			</Card.Subtitle>
		);
	}

	return (
		<Card className="card">
			<Card.Img variant="top" src={props.img} />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				{cardDate}
				<Card.Text>{props.intro}</Card.Text>
				{cardTextStatus}
			</Card.Body>
		</Card>
	);
}

function status(eventDate) {
	let today = new Date();

	if (eventDate >= today) {
		return ["success", "Upcoming"];
	} else {
		return ["danger", "Finished"];
	}
}
