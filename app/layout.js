import Header from "./_components/Header";
import "./_styles/globals.css";
import { Roboto } from "next/font/google";
import { ReservationProvider } from "./contexts/ReservationContext";

const roboto = Roboto({
	subsets: ["latin"],
	display: "swap",
});

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
			<body className={`${roboto.className} min-h-full flex flex-col`}>
				<Header />
				<main className="mt-10 mx-10 ">
					<ReservationProvider>{children}</ReservationProvider>
				</main>
			</body>
		</html>
	);
}
