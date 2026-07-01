import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

async function CabinList() {
	const cabins = await getCabins();

	return (
		<div>
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

export default CabinList;
