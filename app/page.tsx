import Calendar from "@/components/dashboard/cards/Calendar";
import { DashboardDataTable } from "@/components/dashboard/cards/DashboardDataTable";
import { DashboardTable } from "@/components/dashboard/cards/DashboardTable";
import General from "@/components/dashboard/cards/General";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full grid gap-[32px]">
      <div className="w-full grid lg:grid-cols-2 gap-[32px]">
        <General />
        <div className="w-full grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[320px]">
        <Card className="overflow-y-scroll"></Card>
        <Card className="overflow-y-scroll">
          <CardContent>
            <DashboardDataTable />
          </CardContent>
        </Card>
        <Card className="overflow-y-scroll">
          <CardContent>
            <DashboardTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
