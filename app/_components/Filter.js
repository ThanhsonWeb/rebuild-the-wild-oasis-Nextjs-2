"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Button from "./Button";

function Filter() {
	// control the URL
	const searchParams = useSearchParams();
	const activeFilter = searchParams.get("capacity");

	const router = useRouter();
	const pathname = usePathname();

	function handleFilter(filter) {
		const params = new URLSearchParams(searchParams);
		params.set("capacity", filter);
		// create a new URL -> change URl
		router.replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="flex items-center justify-end my-4">
			<Button
				onClick={() => handleFilter("all")}
				activeFilter={activeFilter}
				filter={"all"}
			>
				All Cabins
			</Button>
			<Button
				onClick={() => handleFilter("small")}
				activeFilter={activeFilter}
				filter={"small"}
			>
				Small (1-3)
			</Button>
			<Button
				onClick={() => handleFilter("medium")}
				activeFilter={activeFilter}
				filter={"medium"}
			>
				Medium (3-7)
			</Button>
			<Button
				onClick={() => handleFilter("large")}
				activeFilter={activeFilter}
				filter={"large"}
			>
				Large (8-12)
			</Button>
		</div>
	);
}

export default Filter;
