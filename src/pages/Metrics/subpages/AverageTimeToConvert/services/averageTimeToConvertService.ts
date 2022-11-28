import GroupedMetric from "@common/types/GroupedMetric";
import client from "@common/utilities/client";

const getAveragePeriod = (timeframe: "day" | "week" | "month") => () => {
  const params = {
    timeframe,
  };
  return client.get<GroupedMetric[]>("/metrics/average/timeToConvert", { params }).then((response) => response.data);
};

export { getAveragePeriod };
