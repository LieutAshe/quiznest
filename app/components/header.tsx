"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const pathname = usePathname();
	const linkMenuStyles = `w-full p-1 border-b border-neutral-200 
							sm:border-none sm:p-0 sm:p-2 sm:w-fit sm:rounded-lg
							hover:bg-neutral-700/10
							`
	return (
		<header className="fixed top-0 left-0 w-full h-fit px-4 py-2 bg-amber-400 flex justify-between sm:items-center text-neutral-850 shadow-md shadow-neutral-800/40 z-50">
			<div className="flex items-center justify-center w-fit h-full space-x-2">
				<Image
					width={120}
					height={120}
					alt=""
					src={"/assets/images/quizNest.png"}
					className="h-8 w-auto sm:h-12"
				/>
				<h1 className="text-2xl sm:text-3xl font-bold ">
					QuizNest
				</h1>
			</div>
			<button
				type="button"
				className="sm:hidden h-fit w-fit"
				onClick={() => setShowMenu(!showMenu)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="28"
					height="28"
					viewBox="0 0 50 50"
				>
					<path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
				</svg>
			</button>
			<div
				className={`${
					showMenu ? `flex` : `hidden`
				} sm:hidden fixed top-0 left-0 bg-neutral-900/70 h-screen w-full`}
				onClick={() => setShowMenu(false)}
			></div>
			<ul
				className={`${showMenu ? `flex` : `transform translate-x-full`}
                fixed right-0 top-0 h-full w-3/4 p-5 pl-3 flex-col bg-amber-50 text-xl space-y-2 transition-transform duration-200
                sm:flex sm:static sm:flex-row sm:transform-none sm:translate-x-0 sm:bg-transparent sm:p-0 sm:items-center sm:w-fit sm:space-y-0
            `}
			>
				<div className="absolute top-3 right-3 sm:hidden" onClick={() => setShowMenu(false)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30px"
						height="30px"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M5 12H19M19 12L13 6M19 12L13 18"
							stroke="#000000"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<li className={`${linkMenuStyles} mt-7 sm:mt-0 ${pathname == '/' ? `scale-90 font-light` : ``}
					`}>
					<Link href={"/"}>Home</Link>
				</li>
				<li className={`${linkMenuStyles} ${pathname == '/Quizes' ? `scale-90 font-light` : ``}
					`}>
					<Link href={"/Quizes"}>Quizes</Link>
				</li>
				<li className={`${linkMenuStyles} ${pathname == '/supportme' ? `scale-90 font-light` : ``}
					`}>
					<Link href={"/supportme"}>Support Me</Link>
				</li>
			</ul>
		</header>
	);
}
