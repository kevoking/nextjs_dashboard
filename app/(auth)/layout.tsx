import LandingHeader from "@/components/landing/LandingHeader";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <div className="w-full min-h-screen">
      {children}
    </div>
  );
}
