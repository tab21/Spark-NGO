import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//css
import "./App.css";

// My Components
import NavigationBar from "./components/Nav";
import Home from "./components/Home";
import Project from "./components/Project";
import Events from "./components/Events";
import Footer from "./components/Footer";
import About from "./components/About";
import PaymentAlert from "./components/Payment/Alert";

function App() {
	return (
		<div className="App">
			{/* Navbar and pages */}
			<Router>
				<NavigationBar />
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Project />} />
						<Route path="/events" element={<Events />} />
						<Route path="/about" element={<About />} />
						<Route
							path="/success"
							element={<PaymentAlert variant="success" />}
						/>
						<Route
							path="/failed"
							element={<PaymentAlert variant="danger" />}
						/>
					</Routes>
				</div>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
