import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function HomeCard(props) {
	if (props.ishome) {
		return (
			<Card className="card">
				<Card.Img variant="top" src={props.img} />
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text>{props.intro}</Card.Text>
				</Card.Body>
			</Card>
		);
	} else {
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
}

export default HomeCard;

HomeCard.defaultProps = {
	ishome: false,
};
