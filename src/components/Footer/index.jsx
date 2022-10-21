import React from "react";
import { Button } from "react-bootstrap";
import { FaTwitterSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

// css
import "./style.scss";

export default function Footer() {
	return (
		<div className="footer container-fluid text-lg-left">
			<div className="head">
				<div className="row">
					<h4>Wanna Help ?</h4>
					<Button variant="outline-light">Donate</Button>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6 mt-md-0 mt-3">
					<p>Want to know more about us?</p>
					<div>
						<a
							href="https://www.linkedin.com/company/the-sparks-foundation/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin size="2rem" />
						</a>
						<a
							href="https://twitter.com/tsfsingapore"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitterSquare size="2rem" />
						</a>
						<a
							href="https://www.facebook.com/thesparksfoundation.info"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebookSquare size="2rem" />
						</a>
					</div>
				</div>
				<hr className="clearfix w-100 d-md-none pb-0" />
				<div className="col-md-6 mt-md-0 mt-3">
					<h5 className="text-uppercase">Queries? Contact Us </h5>
					<p>
						Phone Number: +919999999999
						<br />
						Email : anonymous0@gmail.com
					</p>
				</div>
			</div>

			<div className="bottom text-center py-3">
				&copy; 2022 Copyright :{" "}
				<a href="https://github.com/tab21">tab21</a>
			</div>
		</div>
	);
}
