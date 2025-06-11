"use client";

import { useEffect } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Content() {
	useEffect(() => {
		const handleScroll = () => {
			console.log("body scrolled");
		};

		document.body.addEventListener("scroll", handleScroll);

		console.log(document.body);

		return () => document.body.removeEventListener("scroll", handleScroll);
	});

	return (
		<div className="main" onScroll={() => console.log("Hey Eliud")}>
			<Header />
			<div className="content" onScroll={() => console.log("Hey Eliud")}>
				<h1 className="motto">#SuraYaMbuziKaziYaPunda</h1>
				<div className="mission-vision">
					<div className="mission">
						<h3 className="mission-title">Our Mission</h3>
						<p className="mission-des">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim
							consectetur quidem exercitationem eveniet quas eaque laboriosam
							possimus, a sint, illum saepe maiores, dolorum voluptas aliquid!
							Perferendis, voluptates ullam. Similique?
						</p>
					</div>
					<div className="vision">
						<h3 className="vision-title">Our Vision</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
							et fuga nostrum animi dolores perspiciatis ipsa alias quaerat
							reprehenderit eaque voluptates modi eveniet reiciendis facere sed
							veniam tenetur qui aspernatur aliquid id illo natus molestias
							quod? Vel cum sequi obcaecati.
						</p>
					</div>
				</div>
				<div className="who-are-we">
					<h3 className="who-are-we-title">Who Are We</h3>
					<p className="who-are-we-des">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
						ut sed, voluptatum perferendis reiciendis sapiente quaerat sunt
						voluptates qui voluptatem ducimus voluptas modi cum animi placeat a
						eum. Velit, alias neque. Necessitatibus ratione incidunt quae
						tempore cum aliquid, quia id suscipit soluta dolorem atque dicta.
						Temporibus pariatur eius ipsum ducimus!
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
