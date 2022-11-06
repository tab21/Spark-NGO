import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//My components
import Form from "./Form";

function PaymentModal(props) {
	return (
		<Modal
			id="paymentModal"
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					<h2>Donation</h2>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form />
			</Modal.Body>
		</Modal>
	);
}

export function DonateButton() {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<>
			<Button variant="outline-light" onClick={() => setModalShow(true)}>
				Donate
			</Button>

			<PaymentModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
}

const key = process.env.REACT_APP_key_id;
const secret = process.env.REACT_APP_key_secret;
function payment(amount, name, email, number) {
	let options = {
		key: key,
		key_secret: secret,
		amount: amount * 100,
		currency: "INR",
		name: "Spark NGO",
		description: "for donation",
		handler: function (response) {
			if (
				typeof response.razorpay_payment_id == "undefined" ||
				response.razorpay_payment_id < 1
			) {
				document.location.href = "/failure";
			} else {
				document.location.href = "/success";
			}
		},
		prefill: {
			name: name,
			email: email,
			contact: number,
		},
		notes: {
			address: "Spark NGO Corporate office",
		},
		theme: {
			color: "#4b8",
		},
	};
	let pay = new window.Razorpay(options);
	pay.open();
}
document.addEventListener("submit", (e) => {
	e.preventDefault();
	let amount = e.target.amount.value;
	let name = e.target.name.value;
	let email = e.target.email.value;
	let number = e.target.number.value;

	payment(amount, name, email, number);
});
