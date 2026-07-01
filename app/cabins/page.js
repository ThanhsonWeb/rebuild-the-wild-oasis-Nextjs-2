import CabinCard from "@/app/_components/CabinCard";
import { supabase } from "../_lib/supabase";
export const metadata = {
	title: "Cabins",
};

export default async function Page() {
	// const cabins = [];
	const { data: cabins, error } = await supabase.from("cabins").select("*");
	if (error) {
		return <p>Error loading cabins: {error.message}</p>;
	}
	return (
		<div>
			<h1 className="text-4xl mb-5 text-yellow-500 font-medium">
				Our Luxury Cabins
			</h1>
			<p className="text-primary-200 text-lg mb-10">
				Cozy yet luxurious cabins, located right in the heart of the Italian
				Dolomites. Imagine waking up to beautiful mountain views, spending your
				days exploring the dark forests around, or just relaxing in your private
				hot tub under the stars. Enjoy the beauty of nature in your own little
				home away from home. The perfect spot for a peaceful, calm vacation.
				Welcome to paradise.
			</p>

			{cabins.length > 0 ? (
				<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
					{cabins.map((cabin) => (
						<CabinCard cabin={cabin} key={cabin.id} />
					))}
				</div>
			) : (
				<p className="text-2xl text-center mt-15 bg-amber-200 font-semibold text-amber-900 rounded-2xl p-2">
					Sorry ! Our Cabins are not available now 🌟
				</p>
			)}
		</div>
	);
}
