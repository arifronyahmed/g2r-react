import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./AppLayout";
import QuiSommesNousPage from "./pages/QuiSommesNousPage";
import ContactezNousPage from "./pages/ContactezNousPage";
import FormationPage from "./pages/FormationPage";

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
      {
        path: "/formations",
        element: <FormationPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
