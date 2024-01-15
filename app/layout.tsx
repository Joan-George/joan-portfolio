import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${robotoSlab.className} bg-green-100 h-screen`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
