import React, { useState } from "react";
import "./Navbar.css";
import rb_logo from '../../assets/rb-logo-nav.png'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="Navbar">
			<img src={rb_logo} alt="Resume" className="nav-logo" />

			<div className={`nav-items ${isOpen && "open"}`}>
				<a href="#body">Build Resume</a>
				<a href="#footer">Job Seekers</a>
				<a href="#footer">Know Us</a>
			</div>
			<div
				className={`nav-toggle ${isOpen && "open"}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="bar"></div>
			</div>
		</div>
	);
};

export default Navbar;