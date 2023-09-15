import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
	BiLogoFacebookSquare,
	BiLogoInstagramAlt,
	BiLogoLinkedinSquare,
} from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
	return (
		<footer>
			<Link to="/" className="go-back-footer">
				Go Back
			</Link>
			<section className="container">
				<div className={`${styles.containerIcons}`}>
					<img
						src="/images/DH.png"
						alt="DH-logo"
						style={{ width: "120px", height: "70px" }}
					/>

					<ul className={`${styles.listIcons}`}>
						<Link to="#">
							<li>
								<BiLogoFacebookSquare />
							</li>
						</Link>
						<Link to="#">
							<li>
								<BiLogoInstagramAlt />
							</li>
						</Link>
						<Link to="#">
							<li>
								<IoLogoWhatsapp />
							</li>
						</Link>
						<Link to="#">
							<li>
								<BiLogoLinkedinSquare />
							</li>
						</Link>
					</ul>
				</div>

				<small>Powered by:</small>
				<small>
					<Link
						to="https://www.linkedin.com/in/-angeles-silva-/"
						target="_blank"
					>
						María de los Ángeles Silva
					</Link>
				</small>
				<small>
					<Link to="https://www.linkedin.com/in/serranamarset/" target="_blank">
						Serrana Marset
					</Link>
				</small>
			</section>
		</footer>
	);
};

export default Footer;
