import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import { Role } from "@/shared/domain";

interface CardRoleProps {
  role: Role;
}
export const CardRole: React.FC<CardRoleProps> = ({ role }) => {
  return (
    <Card>
      <CardHeader title={role.name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {role.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
