"use client";

function error({ reset, error }) {
	return (
		<div className="flex flex-col gap-5 justify-center items-center text-2xl">
			<h1 className="text-yellow-600 font-semibold text-4xl mt-15">
				Something went wrong !
			</h1>
			<p>{error.message}</p>
			<button className="bg-amber-500 p-4 cursor-pointer" onClick={reset}>
				Try again
			</button>
		</div>
	);
}

export default error;
