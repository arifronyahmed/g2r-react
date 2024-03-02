import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./AppLayout";
import QuiSommesNousPage from "./pages/QuiSommesNousPage";
import ContactezNousPage from "./pages/ContactezNousPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/qui-sommes-nous",
        element: <QuiSommesNousPage />,
      },
      {
        path: "/contactez-nous",
        element: <ContactezNousPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
