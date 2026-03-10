// NAVIGATION — Root application entry point
// Uses React Router Data mode with RouterProvider

import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}
