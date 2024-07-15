import StudentSidebar from "@/components/dashboard/student-sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Student Dashboard",
    description: "",
};

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (

        <div className="w-full h-screen flex">
            <div className="w-[17%] h-full border-r">
                <StudentSidebar />
            </div>
            <div className="w-[83%] h-full px-8 py-12">
                {children}
            </div>
        </div>

    );
}
