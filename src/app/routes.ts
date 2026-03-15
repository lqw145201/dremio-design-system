// NAVIGATION — Route definitions for the Dremio AI Agent interface
// All named routes are defined here; add new pages as children of the root

import { createBrowserRouter } from "react-router";
import { AIAgentPage } from "./pages/AIAgentPage";
import { CatalogPage } from "./pages/CatalogPage";
import { NewQueryPage } from "./pages/NewQueryPage";
import { JobsPage } from "./pages/JobsPage";
import { AdminPage } from "./pages/AdminPage";
import { OrgSettingsPage, OrgSettingsAiPage } from "./pages/OrgSettingsPage";

import { HomePage } from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/ai-agent",
    Component: AIAgentPage,
  },
  {
    path: "/catalog",
    Component: CatalogPage,
  },
  {
    path: "/new-query",
    Component: NewQueryPage,
  },
  {
    path: "/jobs",
    Component: JobsPage,
  },
  {
    path: "/admin",
    Component: AdminPage,
  },
  {
    path: "/org-settings",
    Component: OrgSettingsAiPage,
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
