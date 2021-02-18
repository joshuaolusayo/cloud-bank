import React from "react";
import Menu from "../../Reusable/Menu";
import Details from "./Details";

const Content = () => {
	return (
		<div className="content container-fluid my-5">
			<div className="container">
                <div className="row">
                    <Menu />
                    <Details />
                </div>
            </div>
		</div>
	);
};

export default Content;
