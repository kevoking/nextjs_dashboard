import LandingHeader from "@/components/landing/LandingHeader";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full grid">
      <div className="w-full min-h-14 flex items-center">
        <LandingHeader />
      </div>
      {children}
    </div>
  );
}
