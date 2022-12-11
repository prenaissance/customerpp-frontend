import { Box, Grid, useMediaQuery } from "@mui/material";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getClicksToConvert, getClicksToShare, getTimeToConvert, getTimeToShare } from "./services/metrics";
import { Link } from "react-router-dom";
import StatisticsPreviewCard from "@common/components/StatisticsPreviewCard/StatisticsPreviewCard";

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
        <Link to="/metrics/total-clicks" style={{ textDecoration: "none" }}>
          <StatisticsPreviewCard
            title="Total page loads"
            icon={
              <Box
                component="img"
                sx={{ width: "8rem", height: "8rem" }}
                alt="TotalClicks"
                src={require("/assets/images/TotalClicks.png")}
              />
            }
            data={clicksToConvertQuery.data || []}
            description="Total number of page loads on a Web page"
          />
        </Link>
      </Grid>

      <Grid item lg={6} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <Link to="/metrics/unique-clicks" style={{ textDecoration: "none" }}>
          <StatisticsPreviewCard
            title="Top pages"
            icon={<Box
              component="img"
              sx={{ width: "9,5rem", height: "9rem" }}
              alt="UniqueClicks"
              src={require("/assets/images/UniqueClicks.png")}
            />}
            data={clicksToConvertQuery.data || []}
            description="Most popular pages depending on unique page loads"
          />
        </Link>
      </Grid>

      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <Link to="/metrics/average-time-to-convert" style={{ textDecoration: "none" }}>
          <StatisticsPreviewCard
            title="Average time for event"
            icon={<Box
              component="img"
              sx={{ width: "7.5rem", height: "7rem" }}
              alt="AverageTime"
              src={require("/assets/images/AverageTime.png")}
            />}
            data={timeToConvertQuery.data || []}
            description="Average time for a user to convert or to share experince"
          />
        </Link>
      </Grid>

      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <Link to="/metrics/conversions" style={{ textDecoration: "none" }}>
          <StatisticsPreviewCard
            title="Conversion rate"
            icon={
              <Box
                component="img"
                sx={{ width: "18rem", height: "6.5rem" }}
                alt="ConversionRate"
                src={require("/assets/images/ConversionRate.png")}
              />
            }
            data={clicksToShareQuery.data || []}
            description="How many people visited the page right before the conversion"
          />
        </Link>
      </Grid>

      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <Link to="/metrics/share-rate" style={{ textDecoration: "none" }}>
          <StatisticsPreviewCard
            title="Share rate"
            icon={
              <Box
                component="img"
                sx={{ width: "10rem", height: "7rem" }}
                alt="ShareRate"
                src={require("/assets/images/ShareRate.png")}
              />
            }
            data={timeToShareQuery.data || []}
            description="How many people visited the page right before the share experience"
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Metrics;
