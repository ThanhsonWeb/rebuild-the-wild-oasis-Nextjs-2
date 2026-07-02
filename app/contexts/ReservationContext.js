"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

export function ReservationProvider({ children }) {
	const [range, setRange] = useState({ from: null, to: null });
	function resetRange() {
		setRange({ from: null, to: null });
	}

	return (
		<ReservationContext.Provider value={{ range, setRange, resetRange }}>
			{children}
		</ReservationContext.Provider>
	);
}

// Custom hook for convenience
export function useReservation() {
	const context = useContext(ReservationContext);
	if (context === undefined) {
		throw new Error("useReservation must be used within a ReservationProvider");
	}
	return context;
}

