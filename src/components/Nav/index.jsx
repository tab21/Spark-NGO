import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// My components
import { DonateButton } from "../Payment";

//scss
import "./style.scss";

// images
import logo from "../../assets/logo.png";

export default function NavigationBar() {
	return (
		<Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
			<Container id="navbarContainer">
				<Navbar.Brand as={Link} to="/">
					<img src={logo} alt="Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav
						className="justify-content-end"
						style={{ width: "100%" }}
					>
						<Nav.Link as={Link} to="/about">
							About Us
						</Nav.Link>
						<Nav.Link as={Link} to="/projects">
							Projects
						</Nav.Link>
						<Nav.Link as={Link} to="/events">
							Events and Workshops
						</Nav.Link>
					</Nav>
					<Nav.Item>
						<DonateButton />
					</Nav.Item>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
