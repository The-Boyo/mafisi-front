import Link from "next/link";

import "./Header.css";

export default function Header() {
	return (
		<header id="header">
			<div className="nav">
				<Link href={"#"}>
					<div
						className="mafisi_header-logo"
						style={{
							height: "40px",
							width: "40px",
							boxShadow: "1px 1px 1px 1px",
							borderRadius: "50%",
						}}
					></div>
				</Link>
				<div className="nav_elements">
					<h5>
						<Link href={"/wadau"}>Wadau</Link>
					</h5>
					<h5>
						<Link href={"/wadau"}>Activities</Link>
					</h5>
					<h5>
						<Link href={"/wadau"}>Be a Fan</Link>
					</h5>
					<h5>
						<Link href={"/wadau"}>Players</Link>
					</h5>
					<h5>
						<Link href={"/wadau"}>Fans</Link>
					</h5>
					<h5>
						<Link href={"/wadau"}>About</Link>
					</h5>
				</div>
				<div className="auth_ui">
					<div className="sign_in">
						<h5>Sign in</h5>
					</div>
				</div>
			</div>
		</header>
	);
}
