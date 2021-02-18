import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="container-fluid header shadow-lg" id="header-nav">
			<div className="container navbar-light px-0">
				<nav className="d-flex justify-content-between align-items-center py-0">
					<Link className="navbar-brand" to="/">
						<img loading="lazy" className="cb-logo" src="/assets/logo.svg" alt="Cloud bank" />
					</Link>

					<ul className="navbar-nav mr-auto mt-lg-0 flex-row justify-content-end align-items-center w-100">
						<li className="nav-item active">
							<Link className="nav-link active mr-4 py-3 text-pry" to="/">
								<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M22.8427 21.0865L21.0531 18.1052C20.2281 16.7292 19.7917 15.1542 19.7917 13.549V10.9375C19.7917 6.91775 16.5198 3.64587 12.5 3.64587C8.48023 3.64587 5.20836 6.91775 5.20836 10.9375V13.549C5.20836 15.1542 4.77188 16.7292 3.94688 18.1052L2.15728 21.0865C2.06041 21.2469 2.05831 21.448 2.15001 21.6105C2.24273 21.774 2.41666 21.8751 2.60416 21.8751H22.3958C22.5833 21.8751 22.7573 21.774 22.85 21.6105C22.9417 21.4479 22.9396 21.2469 22.8427 21.0865ZM3.52398 20.8334L4.83961 18.6406C5.76251 17.1031 6.25001 15.3427 6.25001 13.549V10.9375C6.25001 7.49065 9.05313 4.68752 12.5 4.68752C15.9469 4.68752 18.75 7.49065 18.75 10.9375V13.549C18.75 15.3427 19.2375 17.1031 20.1594 18.6406L21.476 20.8334H3.52398Z"
										fill="#828282"
									/>
									<path
										d="M12.5001 0C11.3512 0 10.4168 0.934375 10.4168 2.08335V4.1667C10.4168 4.45415 10.6501 4.6875 10.9376 4.6875C11.2251 4.6875 11.4585 4.45415 11.4585 4.16665V2.08335C11.4585 1.50835 11.9251 1.0417 12.5001 1.0417C13.0751 1.0417 13.5418 1.50835 13.5418 2.08335V4.1667C13.5418 4.45415 13.7751 4.6875 14.0626 4.6875C14.3501 4.6875 14.5835 4.45415 14.5835 4.16665V2.08335C14.5835 0.934375 13.6491 0 12.5001 0Z"
										fill="#828282"
									/>
									<path
										d="M14.7541 21.0906C14.6072 20.8427 14.2895 20.7615 14.0406 20.9042C13.7916 21.05 13.7083 21.3698 13.8541 21.6177C13.9895 21.8479 14.0635 22.1239 14.0635 22.3958C14.0635 23.2573 13.3624 23.9583 12.501 23.9583C11.6395 23.9583 10.9385 23.2573 10.9385 22.3958C10.9385 22.1239 11.0125 21.8479 11.1479 21.6177C11.2926 21.3687 11.2093 21.05 10.9614 20.9042C10.7104 20.7614 10.3937 20.8427 10.2479 21.0906C10.0176 21.4844 9.89575 21.9354 9.89575 22.3959C9.8958 23.8323 11.0635 25 12.4999 25C13.9364 25 15.1041 23.8323 15.1062 22.3959C15.1062 21.9354 14.9843 21.4844 14.7541 21.0906Z"
										fill="#828282"
									/>
								</svg>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link py-3 d-flex align-items-center" to="/">
								<img className="profile rounded-circle" src="/assets/profile.jpeg" alt="Profile" />
								<span className="ml-2 d-none d-md-block">Ezekwesili Obinna</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
