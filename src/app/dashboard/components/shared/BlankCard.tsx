import { Card } from "@mui/material";

const BlankCard = ({ children }: { children: React.ReactNode }) => (
  <Card variant="outlined">{children}</Card>
);

export default BlankCard;
