import { Avatar, Box, Typography } from "@mui/material";
import { Public as PublicIcon } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import SolidDrawer from "@common/components/ui/SolidDrawer/SolidDrawer";
import { colors } from "@common/theme/utils/consts";

type Props = {};

const MetricsRoot = () => {
  return (
    <Box sx={{ display: "flex", justifySelf: "stretch", minHeight: "calc(100vh - 54px)" }}>
      <SolidDrawer sx={{ width: "240px" }}>
        <Avatar sx={{ width: "128px", height: "128px", bgcolor: "primary.main" }}>
          <PublicIcon sx={{ fontSize: "128px", color: colors.LIGHT_GRAY }} />
        </Avatar>
        <Typography variant="h6" fontWeight="bold">
          Web Page
        </Typography>
        <Typography variant="body1">URL</Typography>
      </SolidDrawer>
      <Outlet />
    </Box>
  );
};

export default MetricsRoot;
