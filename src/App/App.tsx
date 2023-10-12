import {RouterProvider} from "react-router-dom";
import {useApp} from "./useApp";
import {Nav} from "../layouts/Nav";

export function App() {
	const {routes} = useApp();
	return (
		<>
			<Nav />
			<RouterProvider router={routes} />
		</>
	);
}

