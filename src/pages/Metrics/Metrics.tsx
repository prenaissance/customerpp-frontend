import CurvePreviewCard from "@common/components/CurvePreviewCard/CurvePreviewCard";
import { Grid, useMediaQuery } from "@mui/material";
import {
  Mouse as MouseIcon,
  AccessTime as AccessTimeIcon,
  Send as SendIcon,
  ScheduleSend as ScheduleSendIcon,
} from "@mui/icons-material";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getClicksToConvert, getClicksToShare, getTimeToConvert, getTimeToShare } from "./services/metrics";
import { colors } from "@common/theme/utils/consts";
import { Link } from "react-router-dom";

const Metrics: FC = () => {
  const isLg = useMediaQuery("(min-width:1200px)");

  // const [isDrawerOpen, setIsDrawerOpen] = useState(isLg);
  const clicksToConvertQuery = useQuery(["clicksToConvert"], getClicksToConvert);
  const timeToConvertQuery = useQuery(["timeToConvert"], getTimeToConvert);
  const clicksToShareQuery = useQuery(["clicksToShare"], getClicksToShare);
  const timeToShareQuery = useQuery(["timeToShare"], getTimeToShare);

  return (
    <Grid container spacing="1rem" sx={{ boxSizing: "border-box", p: "0 2rem", m: "0 auto 1rem auto", maxWidth: "lg" }}>
      <Grid item lg={12} sm={6} xs={12} sx={{ lg: { height: "55%" }, xs: { height: "45%" } }}>
        <CurvePreviewCard
          aspectRatio={3}
          title="WIP Total clicks"
          icon={<MouseIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
          data={clicksToConvertQuery.data || []}
          color={colors.LIGHT_BLUE}
        />
      </Grid>
      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <CurvePreviewCard
          title="Average time"
          icon={<AccessTimeIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
          data={timeToConvertQuery.data || []}
          color={colors.PASTEL_GREEN}
        />
      </Grid>
      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <Link to="/metrics/conversions">
          <CurvePreviewCard
            title="WIP Conversion rate"
            icon={<SendIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
            data={clicksToShareQuery.data || []}
            color={colors.PASTEL_PURPLE}
          />
        </Link>
      </Grid>
      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <CurvePreviewCard
          title="Share rate"
          icon={<SendIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
          data={timeToShareQuery.data || []}
          color={colors.VIBRANT_RED}
        />
      </Grid>
    </Grid>
  );
};

export default Metrics;
