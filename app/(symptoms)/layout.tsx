import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Navbar/>
            <div>
                {children}
            </div>
        <Footer/>
        </>
    );
}
