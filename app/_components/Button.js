function Button({ children, onClick, activeFilter, filter }) {
	return (
		<button
			onClick={onClick}
			className={`p-3 bg-blue-900 text-amber-100 text-lg cursor-pointer border ${activeFilter === filter ? "bg-blue-950" : ""}`}
		>
			{children}
		</button>
	);
}

export default Button;
