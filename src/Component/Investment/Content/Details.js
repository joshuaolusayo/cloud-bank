import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Details = () => {
	return (
		<div className="col-lg-9 investment">
			<div className="container-fluid px-0">
				<div className="row px-0 justify-content-md-between align-items-md-center">
					<div className="col-12 col-md-3">
						<h2>Investment</h2>
						<p>Choose from our available investment plans.</p>
					</div>
					<div className="col-12 col-md-3 mb-3 d-flex align-items-center">
						<span className="rounded-circle bg-green box mr-2"></span>
						<span>Investment plans</span>
					</div>
					<div className="col-12 col-md-3 mb-3 d-flex align-items-center">
						<span className="rounded-circle bg-green box mr-2"></span>
						<span>Create investment</span>
					</div>
					<div className="col-12 col-md-3 mb-3 d-flex align-items-center">
						<span className="rounded-circle bg-green box mr-2"></span>
						<span>Confirm Investment</span>
					</div>
				</div>
				<div className="row">
					<div className="cards d-flex flex-wrap justify-content-center justify-content-sm-between align-items-sm-stretch">
						<Fade>
							<div className="bg-white card mb-4 rounded">
								<div
									className="box-green text-light d-flex flex-column justify-content-center align-items-center pt-4 pb-5"
									style={{ background: `url("/assets/green_bg.svg")` }}
								>
									<p className="medal">Silver</p>
									<h4 className="measuremt">
										12<small>% P/A</small>
									</h4>
									<p className="day">30 days</p>
								</div>
								<div className="pb-3">
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Automatically Renewable
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Automatically Renewal Options
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Cancel Renewal Anytime
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Fast Automated Payout
									</p>
									<Link to="/investment" className="bg-dark-green mx-4 d-block text-light p-3 btn">
										Make Investment
									</Link>
								</div>
							</div>
						</Fade>
						<Fade>
							<div className="bg-white card mb-4 rounded">
								<div
									className="box-green text-light d-flex flex-column justify-content-center align-items-center pt-4 pb-5"
									style={{ background: `url("/assets/green_bg.svg")` }}
								>
									<p className="medal">Silver</p>
									<h4 className="measuremt">
										12<small>% P/A</small>
									</h4>
									<p className="day">30 days</p>
								</div>
								<div className="pb-3">
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Automatically Renewable
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Automatically Renewal Options
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Cancel Renewal Anytime
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Fast Automated Payout
									</p>
									<Link to="/investment" className="bg-dark-green mx-4 d-block text-light p-3 btn">
										Make Investment
									</Link>
								</div>
							</div>
						</Fade>
						<Fade>
							<div className="bg-white card mb-4 rounded">
								<div
									className="box-green text-light d-flex flex-column justify-content-center align-items-center pt-4 pb-5"
									style={{ background: `url("/assets/green_bg.svg")` }}
								>
									<p className="medal">Silver</p>
									<h4 className="measuremt">
										12<small>% P/A</small>
									</h4>
									<p className="day">30 days</p>
								</div>
								<div className="pb-3">
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Automatically Renewable
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Automatically Renewal Options
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Cancel Renewal Anytime
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Fast Automated Payout
									</p>
									<Link to="/investment" className="bg-dark-green mx-4 d-block text-light p-3 btn">
										Make Investment
									</Link>
								</div>
							</div>
						</Fade>
						<Fade>
							<div className="bg-white card mb-4 rounded">
								<div
									className="box-green text-light d-flex flex-column justify-content-center align-items-center pt-4 pb-5"
									style={{ background: `url("/assets/green_bg.svg")` }}
								>
									<p className="medal">Silver</p>
									<h4 className="measuremt">
										12<small>% P/A</small>
									</h4>
									<p className="day">30 days</p>
								</div>
								<div className="pb-3">
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Automatically Renewable
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Automatically Renewal Options
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Cancel Renewal Anytime
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Fast Automated Payout
									</p>
									<Link to="/investment" className="bg-dark-green mx-4 d-block text-light p-3 btn">
										Make Investment
									</Link>
								</div>
							</div>
						</Fade>
						<Fade>
							<div className="bg-white card mb-4 rounded">
								<div
									className="box-green text-light d-flex flex-column justify-content-center align-items-center pt-4 pb-5"
									style={{ background: `url("/assets/green_bg.svg")` }}
								>
									<p className="medal">Silver</p>
									<h4 className="measuremt">
										12<small>% P/A</small>
									</h4>
									<p className="day">30 days</p>
								</div>
								<div className="pb-3">
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Automatically Renewable
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Automatically Renewal Options
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Cancel Renewal Anytime
									</p>
									<p className="text-muted lh">
										<span>
											<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 1.43589L3.58975 7.84614L0 4.28205L1.46156 2.84616L3.58975 4.94874L8.53849 0L10 1.43589Z"
													fill="#3BB54A"
												/>
											</svg>
										</span>
										Fast Automated Payout
									</p>
									<Link to="/investment" className="bg-dark-green mx-4 d-block text-light p-3 btn">
										Make Investment
									</Link>
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
