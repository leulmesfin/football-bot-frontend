"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const discordCommands = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const commands = [
		"$nfl_scores",
		"$bye_week",
		"$rushing_yards",
		"$passing_yards",
		"$receiving_yards",
		"$aura_rank",
	];
	const [filtered_commands, setFilteredCommands] = useState(commands);

	// takes the current value of the input field every time it changes & updates the react state
	// Allows you to always have the most current search term available in your component's state.

	// event: React.ChangeEvent<HTMLInputElement>
	// This is a type annotation for the event parameter.

	// React.ChangeEvent is a TypeScript type provided by React for change events
	// <HTMLInputElement> specifies that this event is coming from an HTML input element.

	// event.target.value: When a user types or modifies an input field, the browser creates an
	// event object containing info about that change. This object is automatically passed to the event
	// handler function.

	// event.target: target refers to the DOM element that triggered the event
	// event.target.value: value is a property of the input element that contains the current text
	// in the input field. Everytime the input changes(i.e. a key is pressed), this value updates
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	useEffect(() => {
		setFilteredCommands(
			commands.filter((command) => command.includes(searchTerm))
		);
	}, [searchTerm]);

	return (
		<div>
			<Navbar />
			<div className="bg-slate-600 h-full w-full">
				<h1 className="text-4xl font-bold text-white text-center pt-4 pb-4">
					Commands:
				</h1>

				<div className="relative max-w-sm mx-auto">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-4 w-4 " />
					<Input
						type="search"
						placeholder="Search commands..."
						className="pl-10 pr-4 bg-gray-50 rounded-md"
						onChange={handleSearchChange}
					/>
				</div>

				{/* All discord commands */}
				<div className="flex flex-col items-center pt-5 gap-4 pb-5">
					{filtered_commands.map((command) => {
						return (
							<Card className="text-center w-64">
								<CardHeader>
									<CardTitle>{command}</CardTitle>
								</CardHeader>
								<CardContent>
									<p>
										Displays the current week's NFL scores. It also displays the
										date and channel of each game.
									</p>
								</CardContent>
							</Card>
						);
					})}
					{/* <Card className="text-center w-64">
						<CardHeader>
							<CardTitle>$nfl_scores</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Displays the current week's NFL scores. It also displays the
								date and channel of each game.
							</p>
						</CardContent>
					</Card> */}

					{/* <Card className="text-center w-64">
						<CardHeader>
							<CardTitle>$bye_week</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Displays all the NFL teams currently on a bye-week.</p>
						</CardContent>
					</Card>

					<Card className="text-center w-64">
						<CardHeader>
							<CardTitle>$rushing_yards</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Displays a leaderboard of the current week's rushing yards.</p>
						</CardContent>
					</Card>

					<Card className="text-center w-64">
						<CardHeader>
							<CardTitle>$passing_yards</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Displays a leaderboard of the current week's passing yards.</p>
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
							<p>Displays a leaderboard of the current week's Aura ranking.</p>
						</CardContent>
					</Card> */}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default discordCommands;
