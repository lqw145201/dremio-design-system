// NAVIGATION — Route definitions for the Dremio AI Agent interface
// All named routes are defined here; add new pages as children of the root

import { createBrowserRouter } from "react-router";
import { AIAgentPage } from "./pages/AIAgentPage";
import { OrgSettingsPage } from "./pages/OrgSettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AIAgentPage,
  },
  {
    path: "/settings/cost-management",
    Component: OrgSettingsPage,
  },
  {
    path: "*",
    Component: AIAgentPage,
  },
]);
