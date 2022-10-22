import CurvePreviewCard from "@common/components/CurvePreviewCard/CurvePreviewCard";
import { Avatar, Box, Grid, Typography, useMediaQuery } from "@mui/material";
import {
  Mouse as MouseIcon,
  AccessTime as AccessTimeIcon,
  Send as SendIcon,
  ScheduleSend as ScheduleSendIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getClicksToConvert, getClicksToShare, getTimeToConvert, getTimeToShare } from "./services/statistics";
import { colors } from "@common/theme/utils/consts";
import SolidDrawer from "@common/components/ui/SolidDrawer/SolidDrawer";

const Statistics: FC = () => {
  const isLg = useMediaQuery("(min-width:1200px)");

  // const [isDrawerOpen, setIsDrawerOpen] = useState(isLg);
  const clicksToConvertQuery = useQuery(["clicksToConvert"], getClicksToConvert);
  const timeToConvertQuery = useQuery(["timeToConvert"], getTimeToConvert);
  const clicksToShareQuery = useQuery(["clicksToShare"], getClicksToShare);
  const timeToShareQuery = useQuery(["timeToShare"], getTimeToShare);

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
      <Grid
        container
        spacing="1rem"
        sx={{ boxSizing: "border-box", p: "0 2rem", m: "0 auto 1rem auto", maxWidth: "lg" }}
      >
        <Grid item lg={12} sm={6} xs={12} sx={{ lg: { height: "55%" }, xs: { height: "45%" } }}>
          <CurvePreviewCard
            aspectRatio={3}
            title="Clicks to convert"
            icon={<MouseIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
            data={clicksToConvertQuery.data || []}
            color={colors.LIGHT_BLUE}
          />
        </Grid>
        <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
          <CurvePreviewCard
            title="Time to convert"
            icon={<AccessTimeIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
            data={timeToConvertQuery.data || []}
            color={colors.PASTEL_GREEN}
          />
        </Grid>
        <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
          <CurvePreviewCard
            title="Clicks to share"
            icon={<SendIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
            data={clicksToShareQuery.data || []}
            color={colors.PASTEL_PURPLE}
          />
        </Grid>
        <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
          <CurvePreviewCard
            title="Time to share"
            icon={<ScheduleSendIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
            data={timeToShareQuery.data || []}
            color={colors.VIBRANT_RED}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Statistics;
