import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function AlertsCard({ title, count }) {
  return (
    <Card className="w-64">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{count}</p>
      </CardContent>
    </Card>
  );
}

export default AlertsCard;
