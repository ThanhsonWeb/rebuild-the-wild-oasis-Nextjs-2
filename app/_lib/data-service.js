import { supabase } from "./supabase";
// ---------------------------------GET----------------------------------
export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) {
		throw new Error("Error loading cabins: " + error.message);
	}

	return data;
}
