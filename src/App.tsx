import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen"; // Ensure this file exists

// ✅ Correct way to create a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
