import Image from "next/image";

export default function Footer() {
	return (
		<footer className="w-full flex flex-col min-h-10 bg-neutral-800 p-3">
			<main className="flex justify-between items-center">
				<div className="flex w-fit">
					<div>
						<Image
							height={120}
							width={120}
							alt=""
							src={`/assets/images/quizNest.png`}
							className="h-12 w-12"
						/>
					</div>
					<h1 className="text-white text-lg font-semibold mt-2">
						QuizNest
					</h1>
				</div>
				<div className="flex space-x-4">
					<a
						href="https://github.com/LieutAshe/quizNest"
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-400 hover:text-white"
					>
						GitHub
					</a>
                    <a
						href="/#"
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-400 hover:text-white"
					>
						Support Me {`(soon :>)`}
					</a>
				</div>
			</main>
			<p className="text-neutral-400 text-sm text-center">
				© {new Date().getFullYear()} QuizNest. All rights reserved.
			</p>
		</footer>
	);
}
