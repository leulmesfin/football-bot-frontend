import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const discordCommands = () => {
	return (
		<div>
			<Navbar />
			<div className="bg-slate-600 h-screen w-screen">
				<h1 className="text-4xl font-bold text-white text-center">Commands:</h1>

				<div>
					<Card className="text-center w-64">
						<CardHeader>
							<CardTitle>$nfl_scores</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
                This command will display the current week's NFL scores.
                It also displays the date and channel of each game.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default discordCommands;
