import { Outlet } from "react-router-dom";
import Header from "../components/layoutComponents/Header";
import Footer from "../components/layoutComponents/Footer";

export default function AppLayout() {

    return (
        <>
            <Header />

            <main className="bg-light min-vh-100 m-0">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}