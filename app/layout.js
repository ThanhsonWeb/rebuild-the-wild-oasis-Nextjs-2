import Header from "./_components/Header";
import "./globals.css";

export const metadata = {
	title: {
		template: " %s || The Wild Oasis",
		default: "Welcome || The Wild Oasis",
	},
	description: "This is the best place to live cause ...",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={` h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Header />
				{/* children = current route */}
				<main>{children}</main>
			</body>
		</html>
	);
}
