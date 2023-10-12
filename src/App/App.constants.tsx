import {
	createBrowserRouter,
} from "react-router-dom";

export const authenticatedRoutes = createBrowserRouter([
	{
		path: "/",
		element: <div>Your authenticated ...</div>,
	},
]);

export const unAuthenticatedRoutes = createBrowserRouter([
	{
		path: "/",
		element: <div>Your not authenticated ...</div>,
	},
]);
