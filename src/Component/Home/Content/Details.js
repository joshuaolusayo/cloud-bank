import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
	return (
		<div className="col-lg-9 home-details">
			<h3>Obinna,</h3>
			<p className="text-muted">Good morning, it's a good day to save 😙</p>
			<div className="container d-flex flex-wrap justify-content-between px-0 px-lg-3">
				<div className="amt-card p-4 bg-white mb-4 d-flex flex-column justify-content-center align-items-start col-lg-4 ml-lg-n3">
					<p className="text-uppercase act-type mb-0">savings account</p>
					<div className="amt">
						<small className="txt-green">#</small> 2,900.00
					</div>
				</div>
				<div className="amt-card p-4 bg-white mb-4 d-flex flex-column justify-content-center align-items-start col-lg-4">
					<p className="text-uppercase act-type mb-0">savings account</p>
					<div className="amt">
						<small className="txt-green">#</small> 2,900.00
					</div>
				</div>
				<div className="amt-card p-4 bg-white mb-4 col-lg-4 mr-lg-n3">
					<div className="top d-flex justify-content-between lighter">
						<span>Investment</span>
						<span className="txt-blue">0229238715</span>
					</div>
					<div className="mid d-flex justify-content-center align-items-center my-3">
						<span className="naira text-green">#</span>
						<span className="amt">10,000</span>
						<span className="kobo">.98</span>
					</div>
					<div className="top d-flex justify-content-between lighter">
						<span className="txt-blue">8.18%</span>
						<span>29/09/2020</span>
					</div>
				</div>
			</div>

			<div className="announcement mb-5">
				<h4 className="mt-4 mb-3">Announcement</h4>
				<div>
					<div className="bg-white p-3 rounded d-flex align-items-center mb-3">
						<span className="ring d-inline-block rounded-circle"></span>
						<span className="ml-3">Finish your KYC</span>
					</div>
					<div className="bg-white p-3 rounded d-flex align-items-center mb-3">
						<span className="ring d-inline-block rounded-circle"></span>
						<span className="ml-3">Follow us on our social media platforms</span>
					</div>
					<div className="bg-white p-3 rounded d-flex align-items-center mb-3">
						<span className="ring d-inline-block rounded-circle"></span>
						<span className="ml-3">Request for a CloudBank mastercard</span>
					</div>
				</div>
			</div>

			<div className="transaction mb-5">
				<div className="container mx-auto d-lg-flex justify-content-between px-0 px-lg-auto">
					<div className="col-lg-8 bg-white py-3 py-lg-4 rounded px-lg-3 mr-lg-n3">
						<div className="title d-flex justify-content-between align-items-center mb-3">
							<h6>Transaction</h6>
							<Link className="link-dark" to="/" href="#">
								View all
							</Link>
						</div>
						<div className="day">
							<h6 className="day__name text-uppercase mb-3">today</h6>
							<div>
								<div className="row mx-0 px-0">
									<div className="w-45 d-flex justify-content-center align-items-center">
										<span className="circle rounded-circle bg-green d-inline-block"></span>
									</div>
									<div className="d-flex justify-content-between bb">
										<div className="d-flex flex-column">
											<span>Bank Transfer</span>
											<span>Account funding</span>
										</div>
										<div className="txt-green">#1000.00</div>
									</div>
									<hr className="my-3 text-danger bg-dark w-100" />
								</div>
								<div className="row mx-0 px-0">
									<div className="w-45 d-flex justify-content-center align-items-center">
										<span className="circle rounded-circle bg-green d-inline-block"></span>
									</div>
									<div className="d-flex justify-content-between bb">
										<div className="d-flex flex-column">
											<span>Bank Transfer</span>
											<span>Account funding</span>
										</div>
										<div className="txt-green">#1000.00</div>
									</div>
								</div>
							</div>
						</div>
						<div className="day mt-4 mt-lg-5">
							<h6 className="day__name text-uppercase mb-3">yesterday</h6>
							<div>
								<div className="row mx-0 px-0">
									<div className="w-45 d-flex justify-content-center align-items-center">
										<span className="circle rounded-circle bg-green d-inline-block"></span>
									</div>
									<div className="d-flex justify-content-between bb">
										<div className="d-flex flex-column">
											<span>Card</span>
											<span>Withdrawal</span>
										</div>
										<div className="text-danger">#900.00</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 bg-white py-3 py-lg-4 rounded px-lg-3 ml-lg-n3">
						<div className="title d-flex justify-content-between align-items-center mb-3">
							<h6>Breakdown</h6>
							<div className="form-group">
								<select className="form-control" name="day" id="day">
									<option>Yesteday</option>
									<option>Today</option>
								</select>
							</div>
						</div>
						<div className="box mx-auto mb-4"></div>
						<div>
							<p className="mb-0">Total Money Received</p>
							<p className="txt-green">#2,000.00</p>
						</div>
						<div>
							<p className="mb-0">Total Money Spent</p>
							<p className="txt-red">#900.00</p>
						</div>
					</div>
				</div>
			</div>

			<div className="savings">
				<div className="container mx-auto jumbotron bg-white d-md-flex justify-content-md-between">
					<div className="col-md-6">
						<div className="box mx-auto mb-4 d-flex flex-column justify-content-center align-items-center text-center">
							<h6 className="lighter">TOTAL</h6>
							<h3 className="font-weight-bold">#2909.98</h3>
						</div>
						<div className="info">
							<div className="d-flex flex-wrap justify-content-between align-items-center">
								<div className="d-flex justify-content-center align-items-center my-2">
									<span className="bg-green mr-2"></span> Savings
								</div>
								<div className="d-flex justify-content-center align-items-center my-2">
									<span className="bg-red mr-2"></span> Business
								</div>
								<div className="d-flex justify-content-center align-items-center my-2">
									<span className="bg-secondary mr-2"></span> Investment
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 py-5 py-md-autp">
						<div className="mb-3">
							<h5 className="price">Savings</h5>
							<p className="txt-green">#2900.00</p>
						</div>
						<div className="mb-3">
							<h5 className="price">Business</h5>
							<p className="txt-green">#0.00</p>
						</div>
						<div className="mb-3">
							<h5 className="price">Investment</h5>
							<p className="txt-green">#9.98</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
