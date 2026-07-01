import Image from "next/image";

export default function Page() {
	return (
		<main className="mt-24 ">
			<Image
				src="/bg.png"
				quality={100}
				fill
				alt="Mountains and forests with two cabins"
				className="object-cover"
			/>

			<div className="relative z-10 text-center">
				<h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
					Welcome to paradise.
				</h1>
				<a
					href="/cabins"
					className="bg-yellow-600 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-700 transition-all"
				>
					Explore luxury cabins
				</a>
			</div>
		</main>
	);
}
