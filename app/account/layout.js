import { Children } from "react";
import SideNavigation from "../_components/SideNavigation";

function layout({ children }) {
	return (
		<div className="grid grid-cols-[15rem_1fr] gap-5">
			<SideNavigation />
			<div>{children}</div>
		</div>
	);
}

export default layout;
