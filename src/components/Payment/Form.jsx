import React from "react";
import { Button } from "react-bootstrap";

//css
import "./form.scss";

export default function form() {
	return (
		<form>
			<div className="input">
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" required />
			</div>
			<div className="input">
				<label htmlFor="number">Contact Number</label>
				<input
					type="number"
					name="number"
					id="number"
					minLength={10}
					maxLength={10}
				/>
			</div>
			<div className="input">
				<label htmlFor="email">E-Mail</label>
				<input type="email" name="email" id="email" required />
			</div>
			<div className="input">
				<label htmlFor="amount">Amount</label>
				<input
					type="number"
					name="amount"
					id="amount"
					min="0"
					required
				/>
			</div>
			<Button type="submit">PAY</Button>
		</form>
	);
}
