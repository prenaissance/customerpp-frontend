import { Box, Grid, useMediaQuery } from "@mui/material";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getClicksToConvert, getClicksToShare, getTimeToConvert, getTimeToShare } from "./services/metrics";
import { Link } from "react-router-dom";
import StatisticsPreviewCard from "@common/components/StatisticsPreviewCard/StatisticsPreviewCard";
import PieChartPreviewCard from "@common/components/PieChartPreview/PieChartPreview";
import HalfPieChartPreviewCard from "@common/components/HalfPieChartPreview/HalfPieChartPreview";

const Metrics: FC = () => {
  const isLg = useMediaQuery("(min-width:1200px)");

  // const [isDrawerOpen, setIsDrawerOpen] = useState(isLg);
  const clicksToConvertQuery = useQuery(["clicksToConvert"], getClicksToConvert);
  const timeToConvertQuery = useQuery(["timeToConvert"], getTimeToConvert);
  const clicksToShareQuery = useQuery(["clicksToShare"], getClicksToShare);
  const timeToShareQuery = useQuery(["timeToShare"], getTimeToShare);

  return (
    <Grid container spacing="1rem" sx={{ boxSizing: "border-box", p: "0 2rem", m: "0 auto 1rem auto", maxWidth: "lg" }}>
      <Grid item lg={6} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <StatisticsPreviewCard
          title="WIP Total clicks"
          icon={<Box
            component="img"
            sx={{ width: "7rem", height: "7rem" }}
            alt="TotalClicks"
            src={require("/assets/images/TotalClicks.png")}
          />}
          data={clicksToConvertQuery.data || []}
          description="Total number of clicks on a speciefic URL"
        />
      </Grid>

      <Grid item lg={6} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <PieChartPreviewCard
          title="WIP Unique clicks"
          data={clicksToConvertQuery.data || []}
          description="Number of unique clicks on a specific URL"
        />
      </Grid>

      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <HalfPieChartPreviewCard
          title="Average time"
          data={timeToConvertQuery.data || []}
          description="Average time spent on the page"
        />
      </Grid>

      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <Link to="/metrics/conversions" style={{ textDecoration: 'none' }}>
          <StatisticsPreviewCard
            title="WIP Conversion rate"
            icon={<Box
              component="img"
              sx={{ width: "18rem", height: "6.5rem" }}
              alt="ConversionRate"
              src={require("/assets/images/ConversionRate.png")}
            />}
            data={clicksToShareQuery.data || []}
            description="How many people visited the page right before the conversion"
          />
        </Link>
      </Grid>

      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <StatisticsPreviewCard
          title="Share rate"
          icon={<Box
            component="img"
            sx={{ width: "10rem", height: "7rem" }}
            alt="ShareRate"
            src={require("/assets/images/ShareRate.png")}
          />}
          data={timeToShareQuery.data || []}
          description="How many people visited the page right before the share experience"
        />
      </Grid>
    </Grid>
  );
};

export default Metrics;
