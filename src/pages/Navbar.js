import React, { Component } from "react";
import bootstrap from "bootstrap";
import index from "./index.css";

// import Button from "react-bootstrap/Button";

// // or less ideally
// import { Button } from "react-bootstrap";

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
					<div class="container-fluid">
						<a class="navbar-brand" href="#!">
							cakesinmind
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-mdb-toggle="collapse"
							data-mdb-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i class="fas fa-bars"></i>
						</button>
						<div
							class="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul class="navbar-nav me-auto">
								<li class="nav-item">
									<a
										class="nav-link active"
										aria-current="page"
										href="#!"
									>
										Home
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#!">
										About
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#!">
										Services
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#!">
										Attractions
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#!">
										Opinions
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#!">
										Contact
									</a>
								</li>
							</ul>
							<ul class="navbar-nav d-flex flex-row">
								<li class="nav-item me-3 me-lg-0">
									<a class="nav-link" href="#!">
										<i class="fas fa-shopping-cart"></i>
									</a>
								</li>
								<li class="nav-item me-3 me-lg-0">
									<a class="nav-link" href="#!">
										<i class="fab fa-twitter"></i>
									</a>
								</li>
								<li class="nav-item me-3 me-lg-0">
									<a class="nav-link" href="#!">
										<i class="fab fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="collapse" id="navbarToggleExternalContent">
						<div class="bg-dark p-4">
							<h5 class="text-white h4">Collapsed content</h5>
							<span class="text-muted">
								Toggleable via the navbar brand.
							</span>
						</div>
					</div>
					<nav class="navbar navbar-dark bg-dark">
						<div class="container-fluid">
							<button
								class="navbar-toggler"
								type="button"
								data-mdb-toggle="collapse"
								data-mdb-target="#navbarToggleExternalContent"
								aria-controls="navbarToggleExternalContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<i class="fas fa-bars"></i>
							</button>
						</div>
					</nav>
				</nav>
			</div>
		);
	}
}
