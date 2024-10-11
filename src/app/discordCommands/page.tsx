import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';

const discordCommands = () => {
	return (
		<div>
			<Navbar />
			<div className="bg-slate-600 h-full w-full">
				<h1 className="text-4xl font-bold text-white text-center">Commands:</h1>
        
        <div>
          <Search />
          <Input />
        </div>
        
        {/* All discord commands */}
				<div className="flex flex-col items-center pt-5 gap-4 pb-5">
          
					<Card className="text-center w-64">
						<CardHeader>
							<CardTitle>$nfl_scores</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
                Displays the current week's NFL scores.
                It also displays the date and channel of each game.
							</p>
						</CardContent>
					</Card>

          <Card className="text-center w-64">
						<CardHeader>
							<CardTitle>$bye_week</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
                Displays all the NFL teams currently on a bye-week.
							</p>
						</CardContent>
					</Card>

          <Card className="text-center w-64">
						<CardHeader>
							<CardTitle>$rushing_yards</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
                Displays a leaderboard of the current week's rushing yards.
							</p>
						</CardContent>
					</Card>

          <Card className="text-center w-64">
						<CardHeader>
							<CardTitle>$passing_yards</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
                Displays a leaderboard of the current week's passing yards.
							</p>
						</CardContent>
					</Card>

          <Card className="text-center w-64">
						<CardHeader>
							<CardTitle>$receiving_yards</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
                Displays a leaderboard of the current week's receiving yards.
							</p>
						</CardContent>
					</Card>

          <Card className="text-center w-64">
						<CardHeader>
							<CardTitle>$aura_rank</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
                Displays a leaderboard of the current week's Aura ranking.
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
