import SolidDrawer from "@common/components/ui/SolidDrawer/SolidDrawer";
import { Avatar, Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { colors } from "@common/theme/utils/consts";

const StatisticsRoot = () => {
  return (
    <Box sx={{ display: "flex", justifySelf: "stretch", minHeight: "calc(100vh - 54px)" }}>
      <SolidDrawer sx={{ width: "240px" }}>
        <Avatar sx={{ width: "128px", height: "128px", bgcolor: "primary.main" }}>
          <AccountCircleIcon sx={{ fontSize: "128px", color: colors.LIGHT_GRAY }} />
        </Avatar>
        <Typography variant="h6" fontWeight="bold">
          Username
        </Typography>
        <Typography variant="body1">Company Name</Typography>
        <Typography variant="body1">Other</Typography>
      </SolidDrawer>
      <Outlet />
    </Box>
  );
};

export default StatisticsRoot;
