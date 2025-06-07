import { Metadata } from "next";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./index.css";

export const metadata: Metadata = {
	title: "Mafisi-fc",
	description: "This is Mafisi fc",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div className="main">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
