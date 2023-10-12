import {RouterProvider} from "react-router-dom";
import {useApp} from "./useApp";

export function App() {
	const {routes} = useApp();
	return <RouterProvider router={routes} />;
}

