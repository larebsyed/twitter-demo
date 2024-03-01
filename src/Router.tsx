import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import { Layout } from "./layout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

const LayoutWithProviders = () => (
  <UserContextProvider>
    <Layout />
  </UserContextProvider>
);

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithProviders />,
    children: [
      { path: "/:username", element: <Home /> },
      { path: "/profile/:username", element: <Profile /> },
    ],
  },
]);
