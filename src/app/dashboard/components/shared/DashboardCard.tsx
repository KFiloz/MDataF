import { Card, CardContent } from "@mui/material";

const DashboardCard = ({ children }: { children: React.ReactNode }) => (
  <Card>
    <CardContent>{children}</CardContent>
  </Card>
);

export default DashboardCard;
