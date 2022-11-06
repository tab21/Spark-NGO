import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

//scss
import "./alert.scss";

export default function PaymentAlert(props) {
	const [show, setShow] = useState(true);
	let message =
		"Thank you for donating. We will make sure that your contribution is remembered and used in correct places and help a number of people.";
	if (props.variant === "danger") {
		message =
			"Opps!!! Hey some error occurred. You can try again after some time";
	}

	let buttonColor = `outline-${props.variant}`;
	return (
		<Alert show={show} variant={props.variant}>
			<Alert.Heading>How's it going?!</Alert.Heading>
			<p>{message}</p>
			<hr />
			<div className="alertButton d-flex justify-content-end">
				<Button onClick={() => setShow(false)} variant={buttonColor}>
					<Alert.Link as={Link} to="/">
						Close me!
					</Alert.Link>
				</Button>
			</div>
		</Alert>
	);
}
