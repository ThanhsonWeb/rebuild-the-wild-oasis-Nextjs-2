import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
	const settings = await getSettings();

	return (
		<div className="md:flex gap-8 mt-5">
			<DateSelector settings={settings} cabin={cabin} />
			<ReservationForm cabin={cabin} />
		</div>
	);
}

export default Reservation;
