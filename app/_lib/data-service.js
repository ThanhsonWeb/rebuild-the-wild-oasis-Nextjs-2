import { supabase } from "./supabase";
// ---------------------------------GET----------------------------------
export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) {
		throw new Error("Error loading cabins: " + error.message);
	}

	return data;
}

export async function getCabin(cabinId) {
	const { data, error } = await supabase
		.from("cabins")
		.select("*")
		.eq("id", cabinId)
		.single();

	if (error) {
		throw new Error("Could not fetch Cabin ! ");
	}

	return data;
}

export async function getSettings() {
	const { data, error } = await supabase.from("settings").select("*").single();

	if (error) {
		throw new Error("Could not fetch Settings ! ");
	}

	return data;
}

export async function getBookedDatesByCabinId(cabinId) {
	let today = new Date();
	today.setUTCHours(0, 0, 0, 0);
	today = today.toISOString();

	// Getting all bookings
	const { data, error } = await supabase
		.from("bookings")
		.select("*")
		.eq("cabinId", cabinId)
		.or(`startDate.gte.${today},status.eq.checked-in`);

	if (error) {
		console.error(error);
		throw new Error("Bookings could not get loaded");
	}

	// Converting to actual dates to be displayed in the date picker
	const bookedDates = data
		.map((booking) => {
			return eachDayOfInterval({
				start: new Date(booking.startDate),
				end: new Date(booking.endDate),
			});
		})
		.flat();

	return bookedDates;
}

export async function getCountries() {
	return countriesData.map((c) => ({
		name: c.name,
		flag: `https://flagcdn.com/w320/${c.code}.png`, // attach flag URL
	}));
}
