import statisticsData from "@testHelpers/fixtures/api.json";
import { delayedRequest } from "@testHelpers/misc/requests";

export type StatisticsDf = {
  device: "Desktop" | "Mobile";
  locale: string;
  clicksToConvert: number;
  clicksToShare: number;
  timeToConvert: number;
  timeToShare: number;
};

export const getStatistics = async () => {
  return delayedRequest(statisticsData) as Promise<StatisticsDf[]>;
};
