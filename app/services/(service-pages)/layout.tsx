// app/services/layout.tsx

import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}

            <Footer />

        </>
    );
}