import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
	BiLogoFacebookSquare,
	BiLogoInstagramAlt,
	BiLogoLinkedinSquare,
	BiHomeSmile,
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
					<span className={`${styles.logoFooter}`}>
						<BiHomeSmile />
					</span>

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
