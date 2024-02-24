import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home";
import Contact from "../components/contact";
import Error from "../components/error";
import Layout from "../components/common/layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/contact",
        element: (
            <Layout>
                <Contact />
            </Layout>
        ),
    },
    {
        path: "/test",
        element: <Layout />,
    },
]);
