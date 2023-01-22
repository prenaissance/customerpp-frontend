import { CringeChangeMetric } from "@common/types/CringeChangeMetric";
import GroupedMetric from "@common/types/GroupedMetric";
import client from "@common/utilities/client";

const getClicksPeriod = (timeframe: "day" | "week" | "month") => () => {
  const params = {
    timeframe,
  };
  return client
    .get<CringeChangeMetric>("/metrics/totalClicks/device", { params })
    .then((response) => response.data.Desktop);
};

export { getClicksPeriod };
