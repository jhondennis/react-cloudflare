import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import { User } from "@/shared/domain";

interface CardUserProps {
  user: User;
}
export const CardUser: React.FC<CardUserProps> = ({ user }) => {
  return (
    <Card>
      <CardHeader title={user.name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
};
