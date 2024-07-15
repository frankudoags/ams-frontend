import LecturerSidebar from "@/components/dashboard/lecturer-sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lecturer Dashboard",
    description: "",
};

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (

        <div className="w-full h-screen flex">
            <div className="w-[17%] h-full border-r">
                <LecturerSidebar />
            </div>
            <div className="w-[83%] h-full">
                {children}
            </div>
        </div>

    );
}
