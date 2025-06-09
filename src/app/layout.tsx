import { Metadata } from "next";

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
			<body>{children}</body>
		</html>
	);
}
