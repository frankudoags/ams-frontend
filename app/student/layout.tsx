"use client";

import StudentSidebar from "@/components/dashboard/student-sidebar";
import HOC from "@/components/hoc";

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <HOC>
            <div className="w-full h-screen flex">
                <div className="w-[17%] h-full border-r">
                    <StudentSidebar />
                </div>
                <div className="w-[83%] h-full px-8 py-12">
                    {children}
                </div>
            </div>
        </HOC>

    );
}
