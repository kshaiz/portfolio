import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { CaseStudies } from "./pages/CaseStudies";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";
import { WorkSamples } from "./pages/WorkSamples";
import { Resume } from "./pages/Resume";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "case-studies", Component: CaseStudies },
      { path: "case-studies/:id", Component: CaseStudyDetail },
      { path: "work-samples", Component: WorkSamples },
      { path: "resume", Component: Resume },
      { path: "*", Component: NotFound },
    ],
  },
], { basename: '/portfolio' });
