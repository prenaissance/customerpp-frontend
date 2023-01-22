import { CringeChangeMetric } from "@common/types/CringeChangeMetric";
import client from "@common/utilities/client";

const getAveragePeriod = (timeframe: "day" | "week" | "month") => () => {
  const params = {
    timeframe,
  };
  return client
    .get<CringeChangeMetric>("/metrics/average/timeToConvert", { params })
    .then((response) => response.data.Desktop);
};

export { getAveragePeriod };
