import { cn } from "@/lib/utils";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex items-start justify-between">
      <div className="hidden lg:flex min-w-[300px] min-h-screen">
        <Sidebar />
      </div>
      
      <main className="w-full h-full grid">
        <Header />
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
