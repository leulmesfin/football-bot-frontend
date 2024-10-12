import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const Home = (): JSX.Element => {
	return (
		<div className="bg-slate-600 ">
			<Navbar />
			<div className="flex flex-col items-center pt-5 gap-4 pb-5 h-screen w-screen">
				<h1 className="text-4xl font-bold text-white text-center">
					Football Discord Bot
				</h1>

				<Image src="/nfl.jpg" alt="logo" width={250} height={250} />

				<Card className="text-center w-64">
					<CardHeader>
						<CardTitle>About</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							A simple bot to view the current week's NFL scores, view which
							teams are on bye, and view the current rushing, passing, and
							receiving yards leaderboards.
						</p>
					</CardContent>
				</Card>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
