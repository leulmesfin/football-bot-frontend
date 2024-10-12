"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Command = {
	name: string;
	description: string;
};

const nfl_scores_cmd: Command = {
	name: "$nfl_scores",
	description:
		"Displays the current week's NFL scores. It also displays the date and channel of each game.",
};
const bye_week_cmd: Command = {
	name: "$bye_week",
	description: "Displays all the NFL teams currently on a bye-week.",
};
const rushing_yds_cmd: Command = {
	name: "$rushing_yards",
	description: "Displays a leaderboard of the current week's rushing yards.",
};
const passing_yds_cmd: Command = {
	name: "$passing_yards",
	description: "Displays a leaderboard of the current week's passing yards.",
};
const receiving_yds_cmd: Command = {
	name: "$receiving_yards",
	description: "Displays a leaderboard of the current week's receiving yards.",
};
const aura_command: Command = {
	name: "$aura_rank",
	description: "Displays a leaderboard of the current week's Aura ranking.",
};

const discordCommands = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const commands: Command[] = [
		nfl_scores_cmd,
		bye_week_cmd,
		rushing_yds_cmd,
		passing_yds_cmd,
		receiving_yds_cmd,
		aura_command,
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
			commands.filter((command) => command.name.includes(searchTerm))
		);
	}, [searchTerm]);

	return (
		<div>
			<Navbar />
			<div className="bg-slate-600 h-full w-full min-h-screen">
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
					{filtered_commands.length != 0 ? (
						filtered_commands.map((command) => {
							return (
								<Card className="text-center w-64">
									<CardHeader>
										<CardTitle>{command.name}</CardTitle>
									</CardHeader>
									<CardContent>
										<p>{command.description}</p>
									</CardContent>
								</Card>
							);
						})
					) : (
						<p className="text-white text-2xl">Sorry, command not found. Please try again.</p>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default discordCommands;
