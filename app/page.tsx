import Image from "next/image";

export default function Home() {
	return (
		<main>
			<section className="flex flex-col justify-center items-center gap-2 h-screen bg-neutral-200 rounded-b-2xl">
				<Image
					height={480}
					width={480}
					alt=""
					src={"/assets/images/quizNest.png"}
					className="h-52 w-auto"
				/>
				<h1 className="text-3xl text-center">Welcome to QuizNest!</h1>
				<h5 className="text-lg text-center">
					Your gateway to fun and challenging quizzes! <br />
					May be it be your own or challenge yourself with our
					quizzes!
				</h5>
				<div className="flex w-fit justify-between gap-5 mt-5">
					<button
						type="button"
						title="Custom"
						className="bg-amber-300 px-4 py-2 rounded-2xl shadow shadow-neutral-700"
					>
						Answer Right Away!
					</button>
					<button
						type="button"
						title="Custom"
						className="bg-amber-50 px-4 py-2 rounded-2xl shadow shadow-neutral-700"
					>
						Create Quiz!
					</button>
				</div>
			</section>
			<section className="h-fit w-full bg-neutral-200 my-1 p-10 rounded-2xl">
				<h2 className="text-3xl text-center mb-2">
					Lots of Topics to discover!
				</h2>
				<p className="text-center mb-4">
					You think you can handle it all?
				</p>
				<QuizCard />
			</section>
			<section className="h-fit w-full bg-neutral-200 my-1 p-10 rounded-2xl flex flex-col justify-center items-center">
				<h2 className="text-3xl text-center mb-2">Create Your Own!</h2>
				<p className="text-center mb-4">
					Need us to help you prepare for your test?
				</p>
				<button
					type="button"
					className="w-4/5 bg-amber-400 rounded-2xl flex items-center justify-center gap-2 py-2"
				>
					Create
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</button>
				<p className="my-2">- or you have a share link?</p>
				<input
					className="bg-amber-50 border border-slate-900 px-2 py-1 w-4/5 rounded-md mb-2"
					type="text"
					placeholder="share-link"
				/>
				<button
					type="button"
					className="w-4/5 bg-amber-50 rounded-2xl flex items-center justify-center gap-2 py-2"
				>
					Open
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</button>
			</section>
			<section className="w-full rounded-2xl bg-neutral-200 p-10 my-1 flex flex-col justify-center items-center">
				<h2 className="text-3xl text-center mb-2">Support?</h2>
				<Image height={360} width={360} src={'/assets/images/quizNest-happy.png'} alt="" className="h-28 w-auto my-4"/>
				<p className="text-center mb-4">
					This is a hobby project - offered free of charge, if you find it useful consider sharing it with your friends or giving feedback or <strong>directly supporting</strong> me through this button:
				</p>
				<button type="button" className="bg-amber-400 w-3/4 py-2 rounded-xl shadow shadow-neutral-700" >
					Support
				</button>
			</section>
		</main>
	);
}

function QuizCard() {
	const quizzes = [
		{
			name: "Philippine History",
		},
		{
			name: "General Knowledge",
		},
		{
			name: "Science & Nature",
		},
		{
			name: "World Geography",
		},
		{
			name: "Pop Culture",
		},
	];

	const isEven = (index: number) => {
		return index % 2 === 0;
	};
	return (
		<div className="flex flex-col gap-2">
			{quizzes.map((quiz, index) => (
				<div
					className={`w-full h-fit rounded-2xl px-5 py-3 flex flex-col relative overflow-hidden
					shadow-md shadow-neutral-950/40
					${isEven(index) ? `bg-amber-300` : `bg-amber-50`}
				`}
					key={index}
				>
					<h1 className="w-full text-xl z-10">{quiz.name}</h1>
				</div>
			))}
		</div>
	);
}
