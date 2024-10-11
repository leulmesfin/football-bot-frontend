import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = (): JSX.Element => {
	return (
		<div className="cursor-pointer flex flex-row gap-4 bg-gray-800 items-center h-14">
			<Link href="/">
				<Image src="/football.jpg" alt="logo" width={55} height={50} />
			</Link>
			{/* <Image src="/football.jpg" alt="logo" width={50} height={50} /> */}
			<h3 className="text-neutral-300 hover:text-white">
				<Link
					href="https://discord.com/oauth2/authorize?client_id=1284275866507149333&permissions=2048&integration_type=0&scope=bot"
					target="_blank"
					rel="noopener noreferrer"
				>
					Invite to Server
				</Link>
			</h3>
			<h3 className="text-neutral-300 hover:text-white">
				<Link href="/discordCommands">Commands</Link>
			</h3>
		</div>
	);
};

export default Navbar;
